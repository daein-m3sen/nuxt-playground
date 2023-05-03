import { defineNuxtModule } from '@nuxt/kit'
import fs from 'fs'
import path from 'path'
import http from 'http'
import socket from 'socket.io'
import * as dotenv from 'dotenv'

dotenv.config()

export default defineNuxtModule({
  meta: {
    name: 'daein-testtool',
    configKey: 'testtool',
  },

  setup(options, nuxt) {
    const server = http.createServer()

    server.listen(process.env.SOCKET_PORT, () => {
      console.log(`Server started, ${process.env.SOCKET_PORT} ${process.env.SOCKET_HOST}`)
    })

    const io = socket(server, {
      cors: {
        origin: '*',
      }
    })

    const baseUrl = __dirname
    const components = []
    const components2 = []
    const extendComponent = []
    const imports = []
    const fileChanges = []

    function fileAnalyzer(path) {
      const content = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' })

      const templateCode = content.match(/<template((.|\n)*)\/template>/g)
      const scriptCode = content.match(/<script((.|\n)*)\/script>/g)
      const styleCode = content.match(/<style((.|\n)*)\/style>/g)
      const tags = content.match(/(<\/[\s+]?\w+[\s+]?>)|(<[\s+]?.*[\s+]?\/>)/g)

      const relativeCode = tags.reduce((acc, tag) => {
        const pureTag = tag.split(' ')[0].replace(/<|>|\/|-|_/g, '').toLowerCase()
        if (extendComponent.includes(pureTag)) {
          const tagInfor = components2[extendComponent.indexOf(pureTag)]
          const addedData = {
            tagName: tagInfor.pascalName,
          }

          const baseFileName = path.replace(process.env.PWD, '').replace('.vue', '').toLowerCase().split('/').slice(2).join('')
          if (baseFileName !== pureTag) {
            const { relativeCode: nestedRelative } = fileAnalyzer(tagInfor.filePath)
            
            if (nestedRelative.length) addedData['related'] = nestedRelative
          }

          acc.push(addedData)
        }

        return acc
      }, [])

      const result = {
        templateCode,
        scriptCode,
        styleCode,
        relativeCode
      }

      return result
    }

    function extractPathToObject(targetPath, rootPath='') {
      const files = {}

      if (!fs.existsSync(targetPath)) return

      const stat = fs.lstatSync(targetPath)
      const rootName = targetPath.split('/').pop()
      rootPath ? rootPath = rootPath : rootPath = rootName

      if (!files[rootName]) files[rootName] = { item: [], child: [] }

      if (stat.isDirectory()) {
        fs.readdirSync(targetPath).forEach(name => {
          const stat = fs.lstatSync(path.join(targetPath, name))
          const filePath = path.join(targetPath, name)
          const fileName = name.split('.')[0]

          if (stat.isDirectory()) {
            files[rootName]['child'].push(extractPathToObject(filePath, path.join(rootPath, fileName)))
          } else {
            files[rootName]['item'].push({ name, path: path.join(rootPath, fileName) })

            fs.watchFile(filePath, (curr, prev) => {
              const updateFile = { name, path: filePath, curr, prev }

              io.emit('update:file', updateFile)
            })
          }
        })
      } else {
        files[rootName]['item'].push({ name: rootName, path: path.join(rootPath, fileName) })
      }

      if (!files[rootName]['item'].length) delete files[rootName]['item']
      if (!files[rootName]['child'].length) delete files[rootName]['child']
    
      return files
    }

    function createFileTree(files) {
      const newObj = {}

      files.map((file, idx) => {
        const baseObj = {}

        baseObj = {
          item: [],
          child: [],
        }

        file.shortPath.split('/').map((chunk, idx) => {
          
        })
      })
    }

    nuxt.hook('imports:dirs', (dirs) => {
      dirs.map(item => item.path).forEach(item => {
        const result = extractPathToObject(item)

        imports.push(result)
      })
    })

    nuxt.hook('imports:extend', (imports) => {
      // console.log(imports, 'extend')
    })

    nuxt.hook('pages:extend', (pages) => {
      // console.log(pages, 'pages')
    })

    nuxt.hook('pages:extend', (pages) => {
      pages.push({ 
        name: 'test-route',
        path: '/test_m3sen/:path(.*)*',
        file: path.join(__dirname, 'pages/index.vue'),
        children: [],
      })

      pages.push({ 
        name: 'test-preview',
        path: '/test_m3sen/preview/:path(.*)*',
        file: path.join(__dirname, 'pages/preview.vue'),
        children: [],
      })
    })

    nuxt.hook('components:dirs', (dirs) => {
      dirs.map(item => item.path).forEach(item => {
        const result = extractPathToObject(item)
        components.push(result)
      })
    })

    nuxt.hook('components:extend', (components) => {
      components2.push(...components)
      createFileTree(components2)

      extendComponent.push(...components.map((component, idx) => {
        console.log(component.filePath)
        return component.pascalName.toLowerCase()
      }))
    })

    io.on('connection', (socket) => {
      io.emit('imports:dirs', imports)
      io.emit('components:dirs', {
        basePath: process.env.PWD,
        components
      })
      io.emit('components:extend', components2)
      io.emit('builder:watch', fileChanges)

      socket.on('load:file', (path) => {
        io.emit('load:file', fileAnalyzer(path))
      })
    })
  }
})