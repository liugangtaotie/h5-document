---
title: miniapp-qr-code
author: liugang
date: 2020-12-31
tags:
 - tag2
categories:
 - category1
---

<template>

<div class="head">一、智慧健康通标准版小程序</div>
<div class="flex wrap">
<div class="flex-item" v-for="(item,index) in golMiniDataList" :key="index">
  <div class="flex flex-center">
<img :src="item.imgSrc"></img>
</div>
 <div class="flex flex-center">{{item.name}}
 </div>
</div>
</div>

<div class="head second-title">二、互联网医院标准版小程序</div>
<div class="flex wrap">
<div class="flex-item" v-for="(item,index) in holMiniDataList" :key="index">
  <div class="flex flex-center">
<img :src="item.imgSrc"></img>
</div>
 <div class="flex flex-center">{{item.name}}
 </div>
</div>
</div>

<div class="head second-title">三、bs-common-ui（小程序二维码）</div>
<div class="flex wrap">
<div class="flex-item" >
  <div class="flex flex-center">
<img src="../assets/images/ui/ui.jpg"></img>
</div>
</div>
</div>

<div class="head second-title">四、bs-common-ui-next（小程序二维码）</div>
<div class="flex wrap">
<div class="flex-item" >
  <div class="flex flex-center">
<img src="../assets/images/ui/ui-next.jpg"></img>
</div>
</div>
</div>
</template>


<script>
export default {
  name: "BsDocument",
  data() {
    return {
      golMiniDataList: [
        
      ],
      holMiniDataList: [
        
      ],
    };
  },
};
</script>

<style scoped>
.head {
  font-size:30px;
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

.flex-center{
  justify-content:center
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

.second-title{
  margin-top:100px
}

</style>
