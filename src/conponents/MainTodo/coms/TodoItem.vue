<template>
  <div :class="['todo-item',todo.completed?'completed':'']">
    <input type="checkbox" v-model="todo.completed" />
    <label>{{todo.content}}</label>
    <button @click="delItem"></button>
  </div>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: {
      todo: Object,
    },
    methods: {
      delItem() {
        // 子组件通过emit触发一个del事件 传递id参数到父组件 父组件监听子组件的del事件
        this.$emit('del', this.todo.id)
      },
    },
  }
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/theme.styl'
  @import '../../../assets/styles/mixins.styl'

  .todo-item
    display flex
    justify-content space-between
    padding 10px
    font-size 24px
    border solid 1px rgba(0, 0, 0, 0.1)

    &.completed
      label
        color #d9d9d9
        text-decoration line-through

    &:hover
      button:after
        content 'x'
        font-size 24px
        color $lightred

    input
      text-align center
      width 50px
      height 30px
      cleanDefaultStyle()

      // &父元素选择器 选定input标签
      &:after
        content url('../../../assets/images/uncheck.svg')

      &:checked:after
        content url('../../../assets/images/check.svg')

    label
      flex 1
      transition color 0.5s

    button
      width 40px
      background-color transparent
      cleanDefaultStyle()
      cursor pointer
</style>