import corsImage from './index.vue'

corsImage.install = Vue => Vue.component(corsImage.name, corsImage) // 给组件配置install方法

export default corsImage;
