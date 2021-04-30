# cors-image
经常碰见一些图片被CORS, 因为请求头中新增了 
`cross-origin-resource-policy: same-origin`，
导致直接img或者背景图无法显示。

# install 安装
> npm install cors-image --save
# usage 使用
> import corsImage from "cors-image"  
> Vue.use(corsImage.vue)
# tip 说明
1. 如果请求头中`x-frame-options: SAMEORIGIN`,那就彻底凉凉了
2. 性能不好，可能会造成滑动卡顿
3. 暂时只有vue版本，react版本稍后发布
4. iOS如果使用了安全距离会自动给内部padding，暂时无法解决，建议去除viewport-fit=cover
