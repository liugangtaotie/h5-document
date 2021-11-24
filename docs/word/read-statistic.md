---
title: 第十五章、文档阅读量统计
author: liugang
date: 2020-12-29
tags:
 - tag4
categories:
 - category1
---

<Boxx  changeTime="5000"/>  

## 一. 搭建文档

* yarn add -D vuepress # npm install -D vuepress

## 二. 引入主题

[vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)

* 为什么选择？

![Image text](../assets/images/word/vuepress-theme-reco.png)

## 三. 引入插件

```js
module.exports = {
  theme: 'reco',
  themeConfig: {
    valineConfig: {
      appId: '...',// your appId
      appKey: '...', // your appKey
    }
  }  
}
```

## 四. 快速食用

* 见本文档
