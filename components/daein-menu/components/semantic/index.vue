<template>
  <Compound-layout_md_container>
    <Basic-title_h1 content="Basic" />
    <hr>
    <Basic-title_h2 content="Atom" />
    <Basic-title_h2 content="h1" />
    <Basic-title_h1 content="h1 컨텐츠 입니다." />
    <Basic-title_h2 content="h2" />
    <Basic-title_h2 content="h2 컨텐츠 입니다." />
    <Basic-title_h2 content="h3" />
    <Basic-title_h3 content="h3 컨텐츠 입니다." />
    <Basic-title_h2 content="icon" />
    <Basic-icon icon="drag_indicator" />
    <br>

    <Basic-title_h2 content="Molecule" />
    <Basic-title_h2 content="iconTitle" />
    <Basic-icon_icon_title title="아이콘타이틀" icon="drag_indicator" />
    <br>

    <Basic-title_h1 content="Compound" />
    <hr>
    <Basic-title_h2 content="list" />
    <Basic-menu_side_menus :menus="testMenus" />
    <br>
  </Compound-layout_md_container>
</template>

<script setup>
const testMenus = ref(
  {
    today: { name: '투데이', icon: 'drag_indicator' },
    pigManage: {
      name: '모돈 관리', pages: {
        scoreGraph: { name: '성적그래프', icon: 'drag_indicator' },
        pigDataManage: { name: '모돈데이터관리', icon: 'drag_indicator' },
        cycleStat: { name: '산차별통계', icon: 'drag_indicator' },
        gestMonitor: { name: '임신사화면', icon: 'drag_indicator' },
        materMonitor: { name: '분만사화면', icon: 'drag_indicator' },
        feedGraph: { name: '급이량그래프', icon: 'drag_indicator' },
        eatRecord: { name: '이유기록', icon: 'drag_indicator' },
      }
    },
    pigletManage: { name: '자돈 관리' },
    envManage: { name: '환경 관리' },
    manageRecord: { name: '운영 기록' },
    workerManage: { name: '작업자 관리' },
  }
)
</script>