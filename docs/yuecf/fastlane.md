---
title: 使用fastlane 自动打包
author: yuecf
date: 2021-1-12
tags: 'fastlane'
---

自动化打包的工具有很多，比较流行的有Jenkins和fastlane；

Jenkins 需要配置的东西非常多，还需要仓库地址等等很多信息，比较麻烦；

fastlane是比较简单快速的，（ios，Android都支持）；

github地址：https://github.com/fastlane/fastlane 
文档地址：https://docs.fastlane.tools/
github上有 24014多星星。3659个fork，所以大量的开发者信任并一起维护他。

1、首先确认是否安装了ruby，
$ ruby -v #查看下ruby版本

2、确认是否安装了Xcode命令行工具
$ xcode-select --install 

3、开始安装fastlane
```
# Using RubyGems
sudo gem install fastlane -NV
或者
# Alternatively using Homebrew
brew cask install fastlane
```

4、使用
```
$ cd + 项目目录
$ fastlane init #执行成功后选择手动
```
配置 项目下fastlane 有两个文件Appfile和Fastfile

Appfile 文件
```
# app_identifier("[[APP_IDENTIFIER]]") # The bundle identifier of your app
# apple_id("[[APPLE_ID]]") # Your Apple email address

# For more information about the Appfile, see:
#     https://docs.fastlane.tools/advanced/#appfile

其中： app_identifier用于指定APP的bundle id，apple_id指的是你的AppleID
```

Fastfile 文件

```
# This file contains the fastlane.tools configuration
# You can find the documentation at https://docs.fastlane.tools
#
# For a list of all available actions, check out
#
#     https://docs.fastlane.tools/actions
#
# For a list of all available plugins, check out
#
#     https://docs.fastlane.tools/plugins/available-plugins
#

# Uncomment the line if you want fastlane to automatically update itself
# update_fastlane

default_platform(:ios)

platform :ios do
  desc "Description of what the lane does"
  lane :custom_lane do
    # add actions here: https://docs.fastlane.tools/actions
  end
end

说明：
lane :custom_lane do中的custom_lane是函数的名称，打包执行命令的时候使用。
# add actions here: https://docs.fastlane.tools/actions 这块就是让我们加具体执行的插件、命令等操作用于打包。
```

简单打包用于测试，可打包成ad-hoc 或者development
并上传到蒲公英或者fir
1、上传蒲公英
1)、cd到项目下， 安装pgyer插件 执行命令fastlane add_plugin pgyer
2、上传至fir
1)、cd到项目下, 安装fir插件，执行命令fastlane add_plugin firim

```
# This file contains the fastlane.tools configuration
# You can find the documentation at https://docs.fastlane.tools
#
# For a list of all available actions, check out
#
#     https://docs.fastlane.tools/actions
#
# For a list of all available plugins, check out
#
#     https://docs.fastlane.tools/plugins/available-plugins
#

# Uncomment the line if you want fastlane to automatically update itself
# update_fastlane
# fastlane NHDMedicalZk

default_platform(:ios)

platform :ios do
  desc "上传新版本到 fir"
  lane :hlwdoczk do  #函数名称，执行打包的时候使用

    increment_build_number
    time = Time.new.strftime("%Y%m%d") #获取时间格式
    version = get_version_number#获取版本号
    api_key = "129c77ec636596110b0730f587228f8d"
    user_key = "f898bc3d67274e8c7efdd4670c8a437e"
    firim_api_token = "d69fa35f34b75f3a08312cafe712bc51"
    ipaName = "Release_#{version}_#{time}.ipa"
    gym(
       scheme:"NHDMedicalZk", #项目target名称
       export_method:"ad-hoc",#打包的类型
       configuration:"Release",#模式，默认Release，还有Debug
       clean:true, #在构建前先clean
       output_name:"#{ipaName}",#输出的包名
       output_directory:"./build"#输出的位置
     )
     #上传 蒲公英
     #pgyer(api_key:"#{api_key}", user_key:"#{user_key}")
     #上传 fir
     firim(firim_api_token:"#{firim_api_token}")
  end
end

```

实际实践例子

1.选择某个项目
![选择某个项目](https://gitee.com/yuechangfeng/blog-source/raw/master/_posts/files/fastlane/fastlane1.png)

2.选择项目的target
![选择某个项目](https://gitee.com/yuechangfeng/blog-source/raw/master/_posts/files/fastlane/fastlane2.png)

3.上传app包的具体配置信息
![APPinfo](https://gitee.com/yuechangfeng/blog-source/raw/master/_posts/files/fastlane/fastlane3.png)

4.app归档结果以及上传的托管平台结果 
![upload](https://gitee.com/yuechangfeng/blog-source/raw/master/_posts/files/fastlane/fastlane4.png)


参考资料：

1.https://www.jianshu.com/p/6ab8d2b7253a

2.https://www.jianshu.com/p/5119c115ec90

3.https://www.jianshu.com/p/77e7fc2cb3c2
