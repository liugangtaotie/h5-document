---
title: Vue3新特性
author: shenrj
date: 2021-08-26
tags:
 - tag5
categories:
 - category1
---

## 一、Vue3.0六大亮点

+ Performance：性能比Vue2.x快1.2~2倍

+ Tree shaking support：按需编译，体积比Vue2.x更小

  <!--more-->

+ Composition API：组合API

+ Better TypeScript support：更好的TS支持
+ Custom Renderer API：暴露了自定义渲染API
+ Fragment， Teleport，Suspense：更先进的组件

## 二、Vue3.0如何变快

1. diff算法优化：（https://vue-next-template-explorer.netlify.app）

   vue2中虚拟dom是进行全量的对比

   vue3新增了静态标记（PatchFlag）

   - 在创建虚拟DOM时根据节点内容是否会发生变化而选择加静态标记

   - 在与上次虚拟节点进行对比的时候，只对比带有patch flag的节点并且可以通过flag的信息得知当前节点要对比的具体内容 

   ```js
   export const enum PatchFlags{
       TEXT = 1,// 动态文本节点
       CLASS = 1 << 1, //2 // 动态class
       STYLE = 1 << 2, //4 // 动态style
       PROPS = 1 << 3, //8 // 动态属性，但不包含类名和样式
       FULL_PROPS = 1 << 4, //16 // 具有动态key属性，当key改变时，需要进行完整的diff比较
       HYDRATE_EVENTS = 1 << 5, //32 // 带有监听事件的节点
       STABLE_FRAGMENT = 1 << 6, //64 // 一个不会改变子节点顺序的fragment
       KEYED_FRAGMENT = 1 << 7, //128 // 带有key属性的fragment或部分子节点有key
       UNKEYED_FRAGMENT = 1 << 8, //256 // 子节点没有key的fragment
       NEED_PATCH = 1 << 9, //512 // 一个节点只会进行非props比较
   }
   ```

2. hoistStatic 静态提升

   vue2中无论元素是否参与更新，每次都会重新创建，然后再渲染

   vue3中对于不参与更新的元素，会做静态提升，只会被创建一次，在渲染时直接复用即可。

3. cacheHandlers 事件侦听器缓存

   默认情况下onClick会被视为动态绑定，所以每次都会去追踪它的变化

   但是因为是同一个函数，所以没有追踪变化，直接缓存起来复用即可。

4. ssr渲染（服务端渲染，暂时不了解）

## 三、Composition API

1. setup()函数是组合api的入口函数
2. 在组合api中定义的变量、方法，要想在外界使用，必须通过return {xxx,xxx}暴露出去
3. setup执行的时机是在`beforeCreate`生命函数之前执行，因此在这个函数中是不能通过`this`来获取实例的，这时this是undefined。
4. 内部函数可以抽离到外部，使得函数能在不同的组件中进行逻辑复用。
5. 在setup函数中挂载生命周期钩子，当执行到对应生命周期时就调用对应的钩子函数。

```js
onMounted(()=>{
    // mounted代码执行
})
```

​	组合api本质上还是注入到各个选项，只不过转变了代码组织方式，更注重逻辑。

## 四、响应式API

1. 对于一些基本数据类型，可以用ref函数来让它变成响应式，对于object和array这样的复杂数据类型则要用reactive函数。

2. vue2中的响应式数据是通过defineProperty来实现的。而vue3中ref返回的响应式对象是只包含一个名为value参数的RefImpl对象（有个私有属性 __v_isRef 为true），reactive返回的响应式对象则是Proxy对象。

3. ref在js中获取和修改都是通过它的value属性；但是在模板中被渲染时，自动展开内部的值，因此不需要在模板中追加`.value`。

4. 用reactive创建的响应式对象，在使用解构表达式时会消除它的响应式，对于这种情况，我们可以将响应式对象转换为一组ref，这些ref将保留与源对象的响应式关联：

   ```js
   let book = reactive({
     name: 'Learn Vue',
     year: 2020,
     title: 'Chapter one'
   })
   let {
     name,
   } = toRefs(book)
   
   // 注意这里解构出来的name是ref对象
   // 需要通过value来取值赋值
   name.value = 'new Learn'
   // new Learn
   console.log(book.name);
   ```

5. 如果给reactive传递了其他对象（比如Date对象）, 默认情况下修改对象，界面不会自动更新。如果想更新，可以通过重新赋值的方式

6. 递归监听：

   ref和reactive都做递归监听

   reactive多层嵌套的对象每一层都封装成proxy对象

   数据量大时消耗性能

7. 非递归监听：

   递归监听如果数据量大会消耗性能

    - 使用非递归监听只监听到第一层（ref则是监听.value），只有第一层发生变化时才会触及整个数据的变化，
        如果第一层不变化，其他层变化，无法实现响应
    - 创建非递归监听：shallowRef，shallowReactive
    - 主动触发非递归监听属性更新（即非第一层改变也更新整个数据）
        triggerRef函数（并没有triggerReactive）
    - 应用场景：只有在监听数据量比较大时才用，抠性能细节

## 五、Fragment、Teleport、Suspense

**Fragment**：

在vue2.x中，每个模板都需要一个根节点，而在3中直接不需要，可以多个根节点，节省掉不必要的div元素。

**Teleport**：

它可以将插槽中的元素或者组件传送到页面的其他位置。

Teleport一个常见的使用场景，就是在一些嵌套比较深的组件来转移模态框的位置。虽然在逻辑上模态框是属于该组件的，但是在样式和DOM结构上，嵌套层级后较深后不利于进行维护（z-index等问题）；因此我们需要将其进行剥离出来。

```vue
<template>
  <button @click="showDialog = true">打开模态框</button>

  <teleport to="body">
    <div class="modal" v-if="showDialog" style="position: fixed">
      我是一个模态框
      <button @click="showDialog = false">关闭</button>
      <child-component :msg="msg"></child-component>
    </div>
  </teleport>
</template>
<script>
export default {
  data() {
    return {
      showDialog: false,
      msg: "hello"
    };
  },
};
</script>
```

**Suspense**:

Suspense是Vue3推出的一个内置组件，它允许我们的程序在等待异步组件时渲染一些后备的内容，可以让我们创建一个平滑的用户体验.

在Vue3中重新定义，异步组件需要通过`defineAsyncComponent`来进行显示的定义：

```js
import { defineAsyncComponent } from "vue";
export default {
  components: {
    AsyncButton: defineAsyncComponent(() =>
      import("../components/AsyncButton")
    ),
  },
};
// 或者更精细的管理
export default {
  components: {
    AsyncButton: defineAsyncComponent({
      delay: 100,
      timeout: 3000,
      loader: () => import("../components/AsyncButton"),
      errorComponent: ErrorComponent,
      onError(error, retry, fail, attempts) {
        if (attempts <= 3) {
          retry();
        } else {
          fail();
        }
      },
    }),
  },
};
```

suspense在组件加载时渲染一些后备内容，提供了两个slot插槽，一个default默认，一个fallback加载中的状态。

```vue
<template>
  <div>
    <button @click="showButton">展示异步组件</button>
    <template v-if="isShowButton">
      <Suspense>
        <template #default>
          <AsyncButton></AsyncButton>
        </template>
        <template #fallback>
          <div>组件加载中...</div>
        </template>
      </Suspense>
    </template>
  </div>
</template>
<script>
export default {
  setup() {
    const isShowButton = ref(false);
    function showButton() {
      isShowButton.value = true;
    }
    return {
      isShowButton,
      showButton,
    };
  },
}
</script>
```



