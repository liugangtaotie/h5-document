# bug-project

## 关于升级iOS14之后，使用YBImageBrowser框架浏览图片之后显示黑屏的解决方案

> 说明：
>
> 1、此bug并非YBImageBrowser本身的原因，是由于YBImageBrowser框架依赖了YYImage而造成的，属于YYImage的bug；
>
> 2、由于YYImage还未修复此bug，以及相应的升级版本，临时提供以下解决方案；

**原因如下：**
```ruby
iOS 14.0 YYAnimatedImageView 无法显示正常图片

14.0 系统调用了此方法，YYAnimatedImageView没有正确处理
- (void)displayLayer:(CALayer *)layer;
```

**解决方案：**
<div style="color:red">考虑到以后该框架会升级，所以没有更改源码，而是通过增加分类的方式临时修改</div> 

.h文件
```ruby
//
//  E-mail: iwtkings@163.com
//
//  Created by iwtkings on 2020/09/23.
//  Copyright © 2020 common. All rights reserved.
//

#import "YYAnimatedImageView.h"

NS_ASSUME_NONNULL_BEGIN

@interface YYAnimatedImageView (NHBugFix)

@end

NS_ASSUME_NONNULL_END

```

.m文件
```ruby
//
//  E-mail: iwtkings@163.com
//
//  Created by iwtkings on 2020/09/23.
//  Copyright © 2020 common. All rights reserved.
//

#import "YYAnimatedImageView+NHBugFix.h"

#import <objc/runtime.h>

@implementation YYAnimatedImageView (NHBugFix)

+ (void)load {
    Method a = class_getInstanceMethod(self, @selector(displayLayer:));
    Method b = class_getInstanceMethod(self, @selector(swizzing_displayLayer:));
    method_exchangeImplementations(a, b);
}

- (void)swizzing_displayLayer:(CALayer *)layer {
    // 通过变量名称获取类中的实例成员变量
    Ivar ivar = class_getInstanceVariable(self.class, "_curFrame");
    UIImage *_curFrame = object_getIvar(self, ivar);

    if (_curFrame) {
        layer.contents = (__bridge id)_curFrame.CGImage;
    } else {
        if (@available(iOS 14.0, *)) {
            [super displayLayer:layer];
        }
    }
}

@end

```
