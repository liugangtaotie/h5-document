---
title: JS-Native
author: liugang
date: 2020-09-02
tags:
 - tag2
categories:
 - category1
---

* ## 概述

JS-Native是网页和原生进行交互的规范。

通过使用JS-Native，网页开发者可借助原生APP高效地使用拍照、选图、位置等手机系统的能力，同时可以直接使用原生APP分享、扫一扫等原生APP特有的能力，为用户提供更优质的网页体验。

此文档面向网页开发者介绍JS-Native如何使用及相关注意事项。

* ## 基础接口

## 范式

```javascript
// jsNativeCommonName：js+native 交互方法名
// params：数据传输给native
// callback：native回调函数
common.goToNative(jsNativeCommonName, params, callback);
});

注：JS-Native之间通过json字符串进行通信
```

## 1. 获取用户信息：getUserInfo

```javascript
- 方法名：getUserInfo
- js传递给native的数据：{}
- native回调给js的数据：
{
  "userId": "xxxx", // 用户id
  "cardNo": "xxxx", // 证件号码
  "cardType": "xxxx", // 证件类型
  "bussType": "xxxx", // 平台类型（GOL:智慧健康通；HOL:互联网医院）
}

// 示例
common.goToNative("getUserInfo", params, (data: any) => {});
```

## 2. 获取客户端信息：getClientData

```javascript
- 方法名：getClientData
- js传递给native的数据：{}
- native回调给js的数据：
{
  "name": "xxxx", // 设备名称：xiaowang 的 iPhone、xiaohei 的 Android
  "model": "xxxx", // 型号：iPhone、iPad、iTouch、Xiaomi、Vivo、OPPO、HUAWEI
  "systemName": "xxxx", // 系统名称：iOS、Android
  "systemVersion": "xxxx", // 系统版本号：11.0
  "appType": "xxx", // APP类型：1、居民端；2、医生端；3、管理端
  "appVersion": "xxx", // APP版本号：1.0
}

// 示例
common.goToNative("getClientData", params, (data: any) => {});
```

## 3. 获取token：getToken

```javascript
- 方法名：getToken
- js传递给native的数据：{}
- native回调给js的数据：
{
  "token": "xxxx", // 用户token
}

// 示例
common.goToNative("getToken", params, (data: any) => {});
```

## 4. 上传图片：uploadImage

```javascript
- 方法名：uploadImage
- js传递给native的数据：{}
- native回调给js的数据：
[
  {
    "fileId": "xxxx", // 文件id
    "fileUrl": "xxxx", // 文件url
  }
]

// 示例
common.goToNative("uploadImage", params, (data: any) => {});
```

## 5. 下载图片：downloadImage

```javascript
- 方法名：downloadImage
- js传递给native的数据：
[
  {
    "fileId": "xxxx", // 文件id
    "fileUrl": "xxxx", // 文件url
  }
]
- native回调给js的数据：
{
  "success": "0/1", // 0: 失败；1:成功
}

// 示例
common.goToNative("downloadImage", params, (data: any) => {});
```

## 6. 打开地理位置：openLocation

```javascript
- 方法名：openLocation
- js传递给native的数据：{}
- native回调给js的数据：
{
  "code": "200",
  "data": {
    "latitude": "xxxx", // 纬度
    "longitude": "xxxx", // 经度
  }
}

// 示例
common.goToNative("openLocation", params, (data: any) => {});
```

## 7. 获取地理位置：getLocation

```javascript
- 方法名：getLocation
- js传递给native的数据：{}
- native回调给js的数据：
{
  "code": "200",
  "data": {
    "latitude": "xxxx", // 纬度
    "longitude": "xxxx", // 经度
  }
}

// 示例
common.goToNative("getLocation", params, (data: any) => {});
```

## 8. 调起客户端扫一扫：scanQRCode

```javascript
- 方法名：scanQRCode
- js传递给native的数据：
{
  "type": "qrCode/barCode", // 扫码类型
}
- native回调给js的数据：
{
  "result": {}, // 回调结果    
}

// 示例
common.goToNative("scanQRCode", params, (data: any) => {});
```

## 9. 导航栏状态：navBarStatus

```javascript
- 方法名：navBarStatus
- js传递给native的数据：
{
  "type": "show/hide", // 显示、隐藏
}
- native回调给js的数据：{}

// 示例
common.goToNative("navBarStatus", params, (data: any) => {});
```

## 10. 状态栏：setStatusBarColor

```javascript
- 方法名：setStatusBarColor
- js传递给native的数据："#078BDE"
- native回调给js的数据：{}

// 示例
common.goToNative("setStatusBarColor", params, (data: any) => {});
```

## 11. 返回/关闭页面：popToPrevious

```javascript
- 方法名：popToPrevious
- js传递给native的数据：{}
- native回调给js的数据：{}

// 示例
common.goToNative("popToPrevious", params, (data: any) => {});
```

## 12. 当前用户登出：logout

```javascript
- 方法名：logout
- js传递给native的数据：{}
- native回调给js的数据：{}

// 示例
common.goToNative("logout", params, (data: any) => {});
```

## 13. 跳转IM：jumpToIMChartVC

```javascript
- 方法名：jumpToIMChartVC
- js传递给native的数据： 
{
  'consultId': 'consultId', // 问诊id
  'consultType': 'consultType', // 问诊类型
  'personName': 'personName',, // 用户名称
}
- native回调给js的数据：{}

// 示例
common.goToNative("jumpToIMChartVC", JSON.stringify(params), (data: any) => {});
```
