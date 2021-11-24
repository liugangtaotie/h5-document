---
title: 第二十五章、micro-app
author: liugang
date: 2021-08-24
tags:
  - tag4
categories:
  - category1
---

<Boxx  changeTime="5000"/>

## 总方针：是什么？从哪里来？要到哪里去？

## 一. 是什么？

### [关于micro-app](https://zeroing.jd.com/micro-app/docs.html#/?id=关于micro-app)

在`micro-app`之前，业内已经有一些开源的微前端框架，比较流行的有2个：`single-spa`和`qiankun`。

`single-spa`是通过监听 url change 事件，在路由变化时匹配到渲染的子应用并进行渲染，这个思路也是目前实现微前端的主流方式。同时`single-spa`要求子应用修改渲染逻辑并暴露出三个方法：`bootstrap`、`mount`、`unmount`，分别对应初始化、渲染和卸载，这也导致子应用需要对入口文件进行修改。因为`qiankun`是基于`single-spa`进行封装，所以这些特点也被`qiankun`继承下来，并且需要对webpack配置进行一些修改。

`micro-app`并没有沿袭`single-spa`的思路，而是借鉴了WebComponent的思想，通过CustomElement结合自定义的ShadowDom，将微前端封装成一个类WebComponent组件，从而实现微前端的组件化渲染。并且由于自定义ShadowDom的隔离特性，`micro-app`不需要像`single-spa`和`qiankun`一样要求子应用修改渲染逻辑并暴露出方法，也不需要修改webpack配置，是目前市面上接入微前端成本最低的方案。

### [micro-app的优势](https://zeroing.jd.com/micro-app/docs.html#/?id=micro-app的优势)

#### [1、使用简单](https://zeroing.jd.com/micro-app/docs.html#/?id=_1、使用简单)

我们将所有功能都封装到一个类WebComponent组件中，从而实现在基座应用中嵌入一行代码即可渲染一个微前端应用。

同时`micro-app`还提供了`js沙箱`、`样式隔离`、`元素隔离`、`预加载`、`数据通信`、`静态资源补全`等一系列完善的功能。

#### [2、零依赖](https://zeroing.jd.com/micro-app/docs.html#/?id=_2、零依赖)

`micro-app`没有任何依赖，这赋予它小巧的体积和更高的扩展性。

#### [3、兼容所有框架](https://zeroing.jd.com/micro-app/docs.html#/?id=_3、兼容所有框架)

为了保证各个业务之间独立开发、独立部署的能力，`micro-app`做了诸多兼容，在任何技术框架中都可以正常运行。

### 原理

* micro-app 是基于 类webComponent + HTML Entry实现的微前端框架

![Image text](../assets/images/microApp/micro-app-principle.png)

官方介绍：通过自定义元素micro-app的生命周期函数connectedCallback监听元素被渲染，加载子应用的html并转换为DOM结构，递归查询所有js和css等静态资源并加载，设置元素隔离，拦截所有动态创建的script、link等标签，提取标签内容。将加载的js经过插件系统处理后放入沙箱中运行，对css资源进行样式隔离，最后将格式化后的元素放入micro-app中，最终将micro-app元素渲染为一个微前端的子应用。在渲染的过程中，会执行开发者绑定的生命周期函数，用于进一步操作。

关于HTML Entry：相信用过qiankun 的童鞋应该都很熟悉，就是加载微应用的入口文件，一方面对微应用的静态资源js、CSS等文件进行fetch，一方面渲染微应用的dom

类WebComponent：我们在上一节学习web Component中了解到两个特征：CustomElement和 ShadowDom，前者使得我们可以创建自定义标签，后者则促使我们可以创建支持隔离样式和元素隔离的阴影DOM。而首次提及的「类WebComponent」是个啥玩意？本质上就是通过使用CustomElement结合自定义的ShadowDom实现WebComponent基本一致的功能


## 推荐的官方文档

[micro-app 官网](https://zeroing.jd.com/micro-app/docs.html#/zh-cn/start)

[这种微前端设计思维听说过吗？](https://mp.weixin.qq.com/s/CD_xmytZUx5Qrt6vrKN-zg)

[接入成本最低微前端框架 京东零售micro-app开源了！](https://mp.weixin.qq.com/s/oI6InGJ3M_opH368eVXHYA)


