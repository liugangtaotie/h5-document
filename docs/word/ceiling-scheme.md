---
title: 第十九章、基于vue的吸顶方案
author: liugang
date: 2021-01-30
tags:
 - tag4
categories:
 - category1
---

<Boxx  changeTime="5000"/>  

## 一. 背景

* 在线问诊的筛选模块滑动的时候，滑动到顶部的时候需要固定（吸顶）

## 二. 实践（基于H5）

```js
<template>
   <div ref="header" :class="headerFixed ? 'issFixed' : ''">
    ...
   </div>
<template>


...

private offsetTop = 0;
private offsetHeight = 0;
private headerFixed: any = 0

...

  mounted() {
    this.$nextTick(() => {
      // 获取吸顶元素的dom
      let header: any = this.$refs.header;
      // 吸顶元素到top的距离
      this.offsetTop = header.offsetTop;
      // 元素自身的高度
      this.offsetHeight = header.offsetHeight;

      // 监听滚动条
      window.addEventListener("scroll", this.handleScroll, true);
    });
  }

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll, false);
  }

  handleScroll() {
    // 得到页面滚动的距离，兼容写法
    let scrollTop =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    // 判断页面滚动的距离是否大于吸顶元素的位置
    this.headerFixed = scrollTop > this.offsetTop - this.offsetHeight;
  }

...

<style lang='scss' scoped>
.issFixed {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 992;
}
</style>

...

```

* 见智慧健康通微信公众号（在线问诊主页）

## 二. 实践（基于小程序）

```js
<template>
  <view class="home">
    <view class="single-model bg-color-primary">光明寂照遍河沙，凡圣含灵共一家</view>
    <view class="single-model bg-color-container">一念不生全体现，六根才动被云遮</view>
    <view class="sticky flex-center">凡所有相皆是虚妄，若见诸相非相，即见如来</view>
    <view class="single-model bg-color-container">断除烦恼重增病，趋向真如亦是邪</view>
    <view class="single-model bg-color-primary">随顺世缘无挂碍，涅槃生死等空花</view>
    <view class="single-model bg-color-container">净洗念珠重换线，坚持佛号莫停声</view>
  </view>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComponentsCeiling",

  setup() {
    return {};
  },
});
</script>

<style lang='scss' scoped>
.single-model {
  height: 500rpx;
  text-align: center;
}

.sticky {
  position: -webkit-sticky;

  /* #endif */
  position: sticky;
  top: var(--window-top);
  z-index: 99;

  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  height: 60rpx;
  line-height: 60rpx;
  color: #fff;
  background-color: red;
}
</style>

```

* 实践可以查看任意第三方vue3版本小程序->模板->吸顶方案

## 推荐的官方文档
