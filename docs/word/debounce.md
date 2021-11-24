---
title: 第十七章、vue3防抖
author: liugang
date: 2021-01-11
tags:
 - tag4
categories:
 - category1
---

<Boxx  changeTime="5000"/>  

## 一. Vue3.x 新特性防抖

* customRef防抖

* 当然这里说的'防抖'不是重点, 重点是这种代码的思维

```js
<template>
  <div>
    <input type="text" v-model="text" />
  </div>
</template>

<script>
import { customRef, onUnmounted } from "vue";
export default {
  setup() {
    let timeout = null; // 并不需要响应式
    const text = useDebouncedRef("hello", (time) => {
      // 毕竟是延时的不用担心获取不到这个值
      console.log("延时执行回调", text.value);
      console.log('时间实例', time)
      timeout = time;
    });
    // 好习惯也是成为合格工程师的必要条件
    onUnmounted(()=>{
        clearTimeout(timeout);
    })
    return {
      text
    };
  }
};

// 并不用纯粹的js编写, 可以利用customRef来监控这个值的一举一动
// 写法一般, 但是思路又多了一条, 感谢
function useDebouncedRef(value, callback, delay = 200) {
  let timeout;
  // 两个参数分别是用于追踪的 track 与用于触发响应的 trigger
  // 这两个参数对 值的追踪 在当前并没有用,比如watchEffect的出发机制
  // 不调用这两个值没问题, 但是如果写成插件的话还是要调用的, 因为别人没准在追踪这个值,

  // 注意:  这个函数不可以有太大的delay, 如果超过500的话就需要考虑在组件销毁时候的清除定时器, 反而逻辑加深了, 此时我们可以每次把演示器的实例拿到
  return customRef((track,trigger) => {
    return {
      get() {
        track()
        return value;
      },
      set(newValue) {
        clearTimeout(timeout);
        // callback接受的太晚了, 可以在这里用另一个函数或对象接收
        timeout = setTimeout(() => {
          value = newValue;
          trigger()
          callback(timeout);
        }, delay);
      }
    };
  });
}
</script>
```

## 二. 价值



## 三. 实践



## 四. 快速食用

* 见本文档


## 推荐的官方文档

[vue3.0团队内部分享总结](https://mp.weixin.qq.com/s/cifT6ceqrTnnirnuv8ZeCQ)
