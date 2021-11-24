---
title: 第二十二章、行内元素和块级元素
author: liugang
date: 2021-03-09
tags:
 - tag4
categories:
 - category1
---

<Boxx  changeTime="5000"/>  

## 一、基础知识

### 1、常见行内元素和块级元素

1）、行内元素

```html
<span>、<a>、
、<b>、<strong>、<img>、<input>、<textarea>、<select>、、、<em>、<del>
```

2）、块级元素

```html
<address>、<center>、<h1>~<h6>、

、<p>、<pre>、<ul>、<ol>、<dl>、<table>、<div>、<form>
```

### 2、具体元素

1、行内元素：a–锚点；abbr–缩写；acronym–首字；b–粗体(不推荐)；bdo–bidi override；big–大字体；br–换行；cite–引用。

code–计算机代码(在引用源码的时候需要)；dfn–定义字段；em–强调；font–字体设定(不推荐)；i–斜体；img–图片。input–输入框。

kbd–定义键盘文本；label–表格标签；q–短引用；s–中划线(不推荐)；samp–定义范例计算机代码；select–项目选择；small–小字体文本。

span–常用内联容器，定义文本内区块；strike–中划线；strong–粗体强调；sub–下标；sup–上标；textarea–多行文本输入框；tt–电传文本；u–下划线；var–定义变量。

2、块级元素：address-地址；blockquote-块引用；center-居中对齐块；dir-目录列表；div-常用块级容器，也是css layout的主要标签；dl-定义列表。

fieldset-form控制组；form-交互表单；h1-大标题；h2-副标题；h3-3级标题；h4-4级标题；h5-5级标题；h6-6级标题；hr-水平分隔线。

isindex-input prompt；menu-菜单列表；noframes-frames可选内容，（对于不支持frame的浏览器显示此区块内容）。

noscript-可选脚本内容（对于不支持script的浏览器显示此内容）；ol-排序表单；p-段落；pre-格式化文本；table-表格；ul-非排序列表（无序列表）。

2、display的block、inline和inline-block的区别

1）、block

会独占一行，多个元素会另起一行，可以设置width、height、margin和padding属性

2）、inline

元素不会独占一行，设置width、height属性无效。但可以设置水平方向的margin和padding属性，不可以设置垂直方向的padding和margin

3）、inline-block

将对象设置为inline对象，但对象的内容作为block对象呈现，之后的内联对象会被排列在同一行内

3、行内元素和块级元素的区别

1）、行内元素

①：设置宽高无效

②：对margin设置左右方向有效，而上下无效，padding设置都无效

③：不会自动换行

2）、块级元素

①：可以设置宽高

②：设置margin和padding都有效

③：可以自动换行

④：多个块状，默认排列从上到下

## 推荐的官方文档

[行内元素和块级元素的区别有哪些？](https://www.jianshu.com/p/efa063e15d8e)
