<template>
  <div>
    <!-- 匹配到MainHeader组件 -->
    <main-header></main-header>
    <main-todo></main-todo>
    <main-footer></main-footer>
  </div>
</template>

<script>
  import './assets/styles/global.styl'

  import MainHeader from './conponents/MainHeader.vue'
  import MainTodo from './conponents/MainTodo/MainTodo.vue'
  import MainFooter from './conponents/MainFooter.vue'

  export default {
    name: 'App',
    components: {
      //组件名：组件对象
      MainHeader: MainHeader,
      MainTodo: MainTodo,
      MainFooter: MainFooter,
    },
  }
</script>

<style lang="stylus" scoped></style>