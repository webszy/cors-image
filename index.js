import corsImage from './index.vue'
const main = {
    vue:{
        install: Vue => Vue.component(corsImage.name, corsImage) // 给组件配置install方法
    }
}
export default main;
