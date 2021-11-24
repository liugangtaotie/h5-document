---
title: docking-document
author: liugang
date: 2021-07-08
tags:
 - tag2
categories:
 - category1
---

* ## 概述

docking-document是微前端对接文档。

此文档面向网页开发者介绍docking-document如何使用及相关注意事项。

* ## 基础接口

## 范式

```javascript
// accessToken:具体用户token
// specialParam:具体模块需要参数
// specialRouter:具体模块路由
let param = 
{
  accessToken: sessionStorage.getItem("accessToken"),
  specialParam,
};

let sparamstr = decodeURIComponent(JSON.stringify(param));

window.location.href = this.$cfg.microServiceOnlineConsult + `/#/resident/${specialRouter}?sparamstr=${sparamstr}`;

```

## example

```javascript
// accessToken:具体用户token
// specialParam:具体模块需要参数
// specialRouter:具体模块路由
 let param = 
 {
  accessToken: sessionStorage.getItem("accessToken"),
  consultId: businessId,
  consultType: businessType,
};
let sparamstr = decodeURIComponent(JSON.stringify(param));
window.location.href = this.$cfg.microServiceOnlineConsult + `/#/resident/consultDetail?sparamstr=${sparamstr}`;

```

