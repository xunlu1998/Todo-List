<template>
  <div class="todo-info">
    <span class="total">{{total}} item left</span>
    <div class="tabs">
      <a
        :class="['change',state==item?'actived':'']"
        v-for="(item,index) in states"
        :key="index"
        @click="taggleState(item)"
      >{{item}}</a>
    </div>
    <button class="clean" @click="cleanCompleted">Clean Completed</button>
  </div>
</template>

<script>
  export default {
    name: 'TodoInfo',
    // 用于接收父组件传来的数据
    props: {
      total: Number,
    },
    data() {
      return {
        states: ['all', 'active', 'completed'],
        state: 'all',
      }
    },
    methods: {
      taggleState(state) {
        this.state = state
        //向父组件传递taggleState事件
        this.$emit('taggleState', state)
      },
      cleanCompleted() {
        this.$emit('cleanCompleted')
      },
    },
  }
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/theme.styl'

  .todo-info
    display flex
    justify-content space-between
    padding 5px 10px
    line-height 30px
    font-weight 400
    border-top solid 1px rgba(0, 0, 0, 0.1)

    .total
      color $red

    .tabs
      display flex
      justify-content space-between
      width 200px

    .change
      padding 0 10px
      border 1px solid $lightred
      border-radius 5px

      &.actived
        background-color $lightred
        color #fff

    .clean
      padding 0 10px
      border-radius 5px
      background-color $green
      color #fff
      cleanDefaultStyle()
</style>