<template>
  <div class="main-todo">
    <input
      type="text"
      class="add-todo"
      placeholder="输入今天要完成的事项吧"
      v-model="content"
      @keyup.enter="addTodo"
      autofocus
    />
    <todo-item
      v-for="(item,index) in filterData"
      :key="index"
      :todo="item"
      @del="handleDeleteItem"
    ></todo-item>
    <todo-info
      :total="total"
      @taggleState="handTaggleState"
      @cleanCompleted="handleClean"
    ></todo-info>
  </div>
</template>

<script>
  import TodoItem from './coms/TodoItem.vue'
  import TodoInfo from './coms/TodoInfo.vue'

  let id = 0

  export default {
    name: 'MainTodo',
    computed: {
      filterData() {
        switch (this.filter) {
          case 'all':
            return this.todoData
            break
          case 'active':
            return this.todoData.filter((item) => item.completed == false)
            break
          case 'completed':
            return this.todoData.filter((item) => item.completed == true)
            break
        }
      },
    },
    components: {
      TodoItem: TodoItem,
      TodoInfo: TodoInfo,
    },
    data() {
      return {
        todoData: [],
        content: '',
        total: 0,
        filter: 'all',
      }
    },
    watch: {
      todoData: {
        // 监听每一个属性的变化
        deep: true,
        // 处理函数 过滤没有完成的数组长度
        handler() {
          this.total = this.todoData.filter(
            (item) => item.completed == false
          ).length
        },
      },
    },
    methods: {
      addTodo() {
        if (this.content === '') return
        this.todoData.unshift({
          id: id++,
          content: this.content,
          completed: false,
        })
        this.content = ''
      },
      handleDeleteItem(id) {
        this.todoData.splice(
          this.todoData.findIndex((item) => item.id === id),
          1
        )
      },
      handTaggleState(state) {
        this.filter = state
      },
      handleClean() {
        this.todoData = this.todoData.filter((item) => item.completed == false)
      },
    },
  }
</script>
 
<style lang="stylus" scoped>
  .main-todo
    margin 0 auto
    width 600px
    background-color #fff
    box-shadow 0 0 5px #666

    .add-todo
      padding 16px 16px 16px 36px
      width 100%
      font-size 18px
      // inherit 继承过来 从哪继承呢
      font-family inherit
      font-weight inherit
      color inherit
      border none
      outline none
      box-sizing border-box
</style>