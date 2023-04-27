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

    const components = []
    const imports = []

    function extractPathToObject(target, newObject = {}) {
      const files = []

      if (!fs.existsSync(target)) return

      const stat = fs.lstatSync(target)

      if (stat.isDirectory()) {
        fs.readdirSync(target).forEach(name => {
          const stat = fs.lstatSync(path.join(target, name))

          if (stat.isDirectory()) {
            files.push({ child: extractPathToObject(path.join(target, name)) })
          } else {
            files.push({ name: name, path: path.join(target, name) })
          }
        })
      } else {
        files.push({ name: target, path: target })
      }

      newObject[target.split('/').pop()] = files
    
      return newObject
    }

    nuxt.hook('app:resolve', (app) => {

    })

    nuxt.hook('imports:dirs', async (dirs) => {
      imports.push(...dirs)
    })

    nuxt.hook('components:dirs', (dirs) => {
      dirs.map(item => item.path).forEach(item => {
        console.log(item)
        const rootName = item.split('/').pop()
        const result = extractPathToObject(item)

        components.push(result)
      })

      console.log(JSON.stringify(components))
    })

    nuxt.hook('components:extend', (components) => {
      // console.log(components)
    })

    io.on('connection', (socket) => {
      io.emit('imports:dirs', imports)
      io.emit('components:dirs', components)
    })
  }
})