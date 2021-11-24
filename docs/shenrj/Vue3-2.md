---
title: Vue3.2新特性
author: shenrj
date: 2021-08-26
tags:
 - tag5
categories:
 - category1
---

### 1. 新的SFC特性

*  `<script setup>`是一种编译时语法糖，可在SFC内使用Composition API时极大地提升工作效率
*  `<style> v-bind`在SFC`<style>`标签内启用组件状态驱动的动态CSS值

<!--more-->

下面是个例子

```vue
<script setup>
import { ref } from 'vue'

const color = ref('red')
</script>

<template>
  <button @click="color = color === 'red' ? 'green' : 'red'">
    Color is: {{ color }}
  </button>
</template>

<style scoped>
button {
  color: v-bind(color);
}
</style>
```

---

script setup的几个优势

- 更少的样板内容，更简洁的代码。
- 能够使用纯 Typescript 声明 props 和发出事件。
- 更好的运行时性能 (其模板会被编译成与其同一作用域的渲染函数，没有任何的中间代理)。
- 更好的 IDE 类型推断性能 (减少语言服务器从代码中抽离类型的工作)。

写在里面的代码会被编译成组件 `setup()` 函数的内容。这意味着与普通的 `<script>` 只在组件被首次引入的时候执行一次不同，`<script setup>` 中的代码会在**每次组件实例被创建的时候执行**。

**顶层的绑定会被暴露给模板**

```vue
<script setup>
import { clickItem } from './methods.ts'; // 方法
import { foo } from './foo.vue' // 组件A
import { bar } from './bar.vue' // 组件B
// 变量
const msg = 'Hello!'
const flag = true
// 函数
function log() {
  console.log(msg)
}
</script>

<template>
  <div @click="log">{{ msg }}</div>
  <div @click="clickItem">
      <foo></foo>
      <component :is="flag ? bar : foo" />
  </div>
</template>
```

动态组件中组件可以做变量在三元表达式中使用<component :is="someCondition ? Foo : Bar" />

**defineProps和defineEmits**

传入到 defineProps 和 defineEmits 的选项会从 setup 中提升到模块的范围。因此，传入的选项不能引用在 setup 范围中声明的局部变量。

**defineExpose**

在标准组件写法里，子组件的数据都是默认隐式暴露给父组件的，但在 script-setup 模式下，所有数据只是默认 return 给 template 使用，不会暴露到组件外，所以父组件是无法直接通过挂载 ref 变量获取子组件的数据。

如果要调用子组件的数据，需要先在子组件显示的暴露出来，才能够正确的拿到，这个操作，就是由 expose 来完成。

### 2.Web 组件

Vue 3.2 引入了新的 defineCustomElement 方法，可以使用 Vue 组件 API 轻松创建原生自定义元素：

```js
import { defineCustomElement } from 'vue'

const MyVueElement = defineCustomElement({
  // 常规 Vue 组件选项
})

// 注册自定义元素。
// 注册完成后，此页面上的所有 `<my-vue-element>` 标签
// 都将将升级。
customElements.define('my-vue-element', MyVueElement)
```

此 API 允许开发者们创建由 Vue 驱动的 UI 组件库。这些库可以支持任何框架选项，甚至能够在无框架情况下正常使用。

### 3.性能改进

3.2版本为Vue的响应式系统带来了一系列重大性能改进。

- 更高效的 ref 实现（读取速度提高约 260%，写入速度提高约 50%）
- 依赖项跟踪速度提高约 40%
- 内存使用量减少约 17%

模板编译器也得到一些改进

* 创建普通元素 VNode 的速度提高约 200%

* 更为积极的连续 hoisting

### 4.v-memo

对模板的一个子树进行记忆。在元素和组件上均可以使用。该指令通过一个固定长度的依赖数组来进行记忆比较。如果数组中的每个值跟最后一次渲染时相比都没有发生变化，那么整个子树的更新都将被跳过。

当组件重新渲染的时候，如果 valueA 与 valueB 都维持不变，那么对这个 `<div>`以及它的所有子节点的更新都将被跳过。事实上，即使是虚拟 DOM 的 VNode 创建也将被跳过，因为子树的记忆副本可以被重用。

带有空依赖数组的 `v-memo` (`v-memo="[]"`) 在功能上等效于 `v-once`。

> v-memo能在性能非常关键的场景下（比如v-for，length>1000）提供微量的优化，在其他情况下很少需要被用到。

