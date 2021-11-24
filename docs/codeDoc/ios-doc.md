---
title: iOS代码规范 1.0.0
author: wangtong
date: 2020-09-06
tags:
 - tag3
categories:
 - category1
---

## 文档修订记录
| 序号 |  修改时间  | 修改人 |  版本  | 备注 |
|:----:|:----------:|:------:|:------:|:----:|
|  1   | 2020.09.02 |  王通  | V1.0.0 | 初稿 |

## 类前缀
**类前缀目的：为了解决类冲突**   
NH：互联网医院   
HC：健康通   

## 类命名规范
类命名要添加前缀，采用驼峰命名方式    

## 类头部注释
**示例一：**
```ruby
/**
 * 类注释
 */
@interface NHXxxxxxClass : NSObject

@end
```
**示例二：**
```ruby
/**
 * 类注释
 *
 * 类详细描述
 */
@interface NHXxxxxxClass : NSObject

@end
```
**示例三：**
```ruby
/// 类注释
@interface NHXxxxxxClass : NSObject

@end
```
**示例四：**
```ruby
/// 类注释
///
/// 类详细描述
@interface NHXxxxxxClass : NSObject

@end
```

## 变量命名规范，采用驼峰方式命名
```ruby
Model: modelXxx, mXxx
NSString: strXxx  
NSAttributedString: aStrXxx    
NSMutableAttributedString: mAStrXxx 
NSNumber: numXxx
NSSet: setXxx
UILabel: lbXxx  
UIButton: btnXxx  
UIImageView: ivXxx  
UIView: viewXxx  
UIImage: imageXxx, imgXxx 
UITextView: tvXxx  
UITextField: tfXxx 
NSLayoutConstraint: cstBtnXxxWidth  
NSArray: arrayXxx, arrXxx 
NSMutableArray: mArrXxx, mArrayXxx  
UIScrollView: svXxx  
UITableView: tableViewXxx, tbvXxx
```

## 属性命名规范，采用驼峰方式命名
```ruby
@property (nonatomic, strong) NSString *strXxx;
@property (nonatomic, copy) NSString *strXxx;
```

## 函数命名规范
**函数命名，采用驼峰方式命名**
<div style="color: red">注意: 大括号写法, 开始大括号在函数右边(非函数下边)</div>
<div style="color: red">注意: 不做命名规范，采用驼峰即可</div>
```ruby
- (void)funcXxx {
}
```
**事件函数：**
```ruby
- (void)onXxx {
}
```
**多参数函数：**
```ruby
- (void)funcXxxWithParamAaa:(NSString *)paramAaa
                   paramBbb:(NSString *)paramBbb {
}
```
**枚举值**
<div style="color: red">注意: 注释写法</div>
```ruby
/**
 注释
 */
typedef NS_ENUM(NSUInteger, MyEnum) {
    /** aaa */
    MyEnum_Aaa,
    /** bbb */
    MyEnum_Bbb,
    /** ccc */
    MyEnum_Ccc
};
```

## 注释
**单行，顶部注释方式一：**
```ruby
/// 注释
```
**单行，顶部注释方式二：**
```ruby
/**
 * 注释
 */
```
**多行，顶部注释方式三：**
```ruby
/// <#描述#>
///
/// <#详细描述#>
///
/// @param <#参数#> <#参数描述#>
/// @param <#参数#> <#参数描述#>
/// @return <#返回参数#>
```
**多行，顶部注释方式四：**
```ruby
/**
 * <#描述#>
 *
 * <#详细描述#>
 *
 * @param <#参数#> <#参数描述#>
 * @param <#参数#> <#参数描述#>
 * @return <#返回参数描述#>
 */
```
