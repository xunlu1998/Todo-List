// 从vue包中导入 Vue对象
import Vue from 'vue'
// 导入App组件对象
import App from "./App.vue";

// 创建Vue跟实例
new Vue({
    el:'#app',
    components:{App:App},
    template:'<App/>'
})

// 测试SourceMap效果
//console1.log('Hello World')