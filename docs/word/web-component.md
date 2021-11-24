---
title: 第二十六章、webComponent
author: liugang
date: 2021-09-01
tags:
  - tag4
categories:
  - category1
---

<Boxx  changeTime="5000"/>

## 总方针：是什么？从哪里来？要到哪里去？

## 一. 是什么？

* webComponent 是一种原生可以直接食用的web组件方案，即在html下面使用，与第三方的库解耦，也就是浏览器原生的组件规范;

Web Components的主要技术:Custom elements（自定义元素）、Shadow DOM（影子DOM）、HTML templates（HTML模板）

### 1.1 原理

各种网站往往需要一些相同的模块，比如日历、调色板等等，这种模块就被称为“组件”（component）。Web Components 就是浏览器原生的组件规范。

采用组件开发，有很多优点。

（1）有利于代码复用。组件是模块化编程思想的体现，可以跨平台、跨框架使用，构建、部署和与其他 UI 元素互动都有统一做法。

（2）使用非常容易。加载或卸载组件，只要添加或删除一行代码就可以了。

（3）开发和定制很方便。组件开发不需要使用框架，只要用原生的语法就可以了。开发好的组件往往留出接口，供使用者设置常见属性，比如上面代码的heading属性，就是用来设置对话框的标题。

（4）组件提供了 HTML、CSS、JavaScript 封装的方法，实现了与同一页面上其他代码的隔离。

未来的网站开发，可以像搭积木一样，把组件合在一起，就组成了一个网站。这种前景是非常诱人的。

Web Components 不是单一的规范，而是一系列的技术组成，以下是它的四个构成。

Custom Elements
Template
Shadow DOM
HTML Import
使用时，并不一定上面四种 API 都要用到。其中，Custom Element 和 Shadow DOM 比较重要，Template 和 HTML Import 只起到辅助作用。


## 推荐的官方文档


[Web Components](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)
