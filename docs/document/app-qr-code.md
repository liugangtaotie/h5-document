---
title: app-qr-code
author: liugang
date: 2020-12-04
tags:
 - tag2
categories:
 - category1
---

<template>

<div class="head">一、Ios 二维码</div>
<div class="flex wrap">
<div class="flex-item" v-for="(item,index) in iosDataList" :key="index">
  <div class="flex flex-center">
<img :src="item.imgSrc"></img>
</div>
 <h2 class="color-red">{{item.name}}
 <a class="f14 " :href="item.aHref" target="_blank">{{item.aHref}}</a>
 </h2>
</div>
</div>

<div class="head second">二、Android 二维码</div>
<div class="flex wrap">
<div class="flex-item" v-for="(item,index) in androidDataList" :key="index">
  <div class="flex flex-center">
<img :src="item.imgSrc"></img>
</div>
 <h2 class="color-red">{{item.name}}
 <a class="f14" :href="item.aHref" target="_blank">{{item.aHref}}</a>
 </h2>
</div>
</div>
</template>


<script>
export default {
  name: "BsDocument",
  data() {
    return {
      iosDataList: [
       
      ],
      androidDataList:[
        
      ]
    };
  },
};


</script>

<style scoped>
.head {
  font-size:40px;
  color: #3eaf7c;
  font-weight:bold;
}

.second {
  margin-top:50px;
}

.flex {
  display:flex;
  font-size:20px;
  justify-content: space-between;
}

.wrap {
  flex-wrap: wrap;
}

.color-red{
  color:red;
}

.flex-center{
  /* justify-content:center */
}

.flex-item{
  width:50%
}

img{
   margin-top:100px !important;
   width:200px;
   height:200px;
}

.{
  /* text-align:center; */
}

.f14{
  font-size:18px;
}

</style>
