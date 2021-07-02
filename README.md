# test-by-element

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### project structure

```sad
@/components/common	公共组件
@/layout/index.vue	公共头部组件
@/mixin	一些混入文件
@/router	路由文件
@/store	VueX文件
@/utils	一些公共js文件
@/views/Board/Charts/BarCharts.vue	柱状图组件
@/views/Board/Charts/ForceMap.vue	关系图组件
@/views/Board/components/FlowMap.vue	流程图右边子组件
@/views/Board/components/SideBar.vue	流程图左边列表栏
@/views/Board/mock	一些mock数据
@/views/Board/DataFlow	流程图父组件
@/views/DataFlow	拖拽组件
@/views/Login	登录组件
@/views/Notes	一些由gitbook创建的book
@/views/Recursion/mock	mock数据
@/views/Recursion/next.js	处理数据的方法文件
@/views/Recursion/next.vue	递归组件
@/views/ShoppingTrolley	购物车组件
@/views/VirtualList/component/BaseList.vue	基础虚拟列表组件
@/views/VirtualList/component/Select.vue	el-select使用虚拟列表
@/views/VirtualList/component/Test.vue	递归树状父组件
@/views/VirtualList/component/TestTree.vue	递归组件
@/views/VirtualList/component/UnfixedHeight.vue	不限高度虚拟列表组件
@/views/VirtualList/mock	mock数据


```

```
npm run serve
```

### 使用的安装包和技术点

```
安装包: vue, vue-router, vuex, element-ui, less, mxgraph, echarts,
技术点: 虚拟列表, 递归组件
```
