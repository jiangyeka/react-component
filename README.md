---
title: React组件库
data: 2021-1-13
sidebar: auto
showSponsor: true
tags: 
 - React
categories: 
 - 项目
 


---

::: tip

::: 

```
npx create-react-app react-component --template typescript

# Add Storybook:
npx sb init

yarn add node-sass --S 

npm install classnames --save
```









## storybook

```
action配置
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

同时引入全局scss
import "../src/styles/index.scss";
```



**色彩体系**

```scss
文件名用下划线开头，Partial 只用来导入
/**
 * 基础色彩系统
 */
// 中性色板
$white: #fff !default;
$gray-100: #f8f9fa !default;
$gray-200: #e9ecef !default;
$gray-300: #dee2e6 !default;
$gray-400: #ced4da !default;
$gray-500: #adb5bd !default;
$gray-600: #6c757d !default;
$gray-700: #495057 !default;
$gray-800: #343a40 !default;
$gray-900: #212529 !default;
$black: #000 !default;

// 基础色板
$blue: #0d6efd !default;
$indigo: #6610f2 !default;
$purple: #6f42c1 !default;
$pink: #d63384 !default;
$red: #dc3545 !default;
$orange: #fd7e14 !default;
$yellow: #fadb14 !default;
$green: #52c41a !default;
$teal: #20c997 !default;
$cyan: #17a2b8 !default;

// 品牌色
$primary: $blue !default;
$secondary: $gray-600 !default;

// 功能色
$success: $green !default;
$info: $cyan !default;
$warning: $yellow !default;
$danger: $red !default;
$light: $gray-100 !default;
$dark: $gray-800 !default;

$theme-colors: (
  "primary": $primary,
  "secondary": $secondary,
  "success": $success,
  "info": $info,
  "warning": $warning,
  "danger": $danger,
  "light": $light,
  "dark": $dark
);
```



```scss
无衬线字体
等宽字体
$font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
"Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
"Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !default;
$font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !default;
$font-family-base: $font-family-sans-serif !default;
```



```
normalize.css  reset的基础上加上一些基础样式 =reboot
```





## icon

```
npm i --save @fortawesome/fontawesome-svg-core  @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome@latest
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/react-fontawesome@latest
npm install react-transition-group --save


```

添加fontawesome所有图标

```js
import { fas } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon, FontAwesomeIconProps} from '@fortawesome/react-fontawesome';
import {library} from "@fortawesome/fontawesome-svg-core";


library.add(fas);
```

## transition

display 和opacity   在display设置为none，你设置的任何动画效果就没有了意义，所以需要通过先做opacity的效果，保持block，在done的时候在设置为none

或者

unmountOnExit 属性

其实不是的，比如我们给加上**unmountOnExit**,
加上这个的意思是在**元素退场时**，**自动把DOM也删除**，这是以前用CSS动画没办法做到的。

enter enter-active exit-exit-active

## button

Type

Size

disabled

children ：React.ReactNode

----

关于a链接只要用 type进行判断一下

添加绑定事件

```
interface BaseButtonProps {
  /**
   * the size of this button
   */
  size?: ButtonSize;
  /**
   * the type of this button
   */
  btnType?: ButtonType;
  /**
   * whether the button can be clicked
   */
  disabled?: boolean;
  /**
   * button name
   */
  children: React.ReactNode;
  /**
   * href url
   */
  href?: string;
  /**
   * classes
   */
  className?: string;
}

// 添加button和a的所有原生属性
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

```



## Menu

mode vertical|hrizontal

 style?: React.CSSProperties;

 defaultIndex?: string;

 className?: string;

 mode?: MenuMode;

 onSelect?: SelectCallback; 回调type SelectCallback = (selectedIndex: string) => void; 自己添加的回调传到menuitem

 defaultOpenSubs?: string[]  默认展开index组

----

至于为children，用context传递

因为children不同名，可以用React.Children

React.Children.map碰见不符合规则的自动跳过

````js
       {React.Children.map(children, (child, index) => {
          const childElement = child as React.FunctionComponentElement<MenuItemProps>;
          if (childElement.type.displayName === 'MenuItem') {
            return React.cloneElement(childElement, { index: index + '' });
          }
          console.error("Warning: Menu has a child whitch is not a MenuItem Component");
          return null;
        })}
````







### menuItem

 index?: string;

 disabled?: boolean;

 className?: string;

 style?: React.CSSProperties;

### submenu

index

title

className

---

```js
  const childrenComponent = React.Children.map(children, (child, i) => {
    const childElement = child as React.FunctionComponentElement<MenuItemProps>;
    if (childElement.type.displayName === 'MenuItem') {
      return React.cloneElement(childElement, {
        index: `${index}-${i}`
      });
    }
    console.error("Warning: Menu has a child witch is not a MenuItem Component");
    return null;
  });

```







## input

应该具有什么功能

大小，后缀，diabled，图标 前缀   自动补全

  \* disabled

  */

 disabled?: boolean;

 /**

  \* size

  */

 size?: 'df' | 'lg' | 'sm';

 /**

  \* icon

  */

 icon?: IconProp;

 /**

  \* prepend

  */

 prepend?: string | ReactElement;

 /**

  \* append

  */

 append?: string | ReactElement;



 /**

  \* the placeholder

  */

 placeholder?: string;



 /**

  \* the child content

  */

 children?: Array<ReactElement> | ReactElement;

 /**

  \* icon was clicked

  */

 onIconClick?: () => void;

 /**

  \* the input ref

  */

 inputRef?: any;

---

Omit忽略接口某个值

```
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
 
```

## progress

percent

strokeHeight

showText

stylles

theme

---



## upload

文件上传

jsonplayce /mocky

表单提交x-www-form-urlencoded multipart/form-data





js发送请求

```
const handleFileChange=(e:React.ChangeEvent<HTMLInputElement>)={
const files=e.target.files
if(files)
{
const uploadFile=files[0]
const formData=new FormData()
formData.appen(uploadFile.name,uploadFile)
axios.POST('url',formData,{
header:{
'Content-Type':'mutipart/form-data'
}
}).then(resp=>{
console.log(resp)
})
}
}
onChange={}

<input onChange={}/>
```



----

onProgress

onChange

onError







action 	接口

onProgress(percentage,file)

onSuccess(data,file)

onError(err,file)



---

input可以设置上传文件，将input隐藏就可以打到效果type="file"



input onchange

```
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) {
      return;
    }
    uploadFiles(files);
    if(inputRef.current) {
      inputRef.current.value = null;
    }
  }
```







上传逻辑



axios的onUploadProgress可以计算百分比

```js
  const post = (_file: UploadFile) => {
    setFileList(prevList => {
      return [_file, ...prevList]
    })
    const formData = new FormData();
    formData.append(name || 'file', _file.raw);
    if (data) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });
    }
    axios.post(action, formData, {
      headers: {
        ...headers,
        'Content-Type': 'multipart/form-data'
      },
      withCredentials,
      onUploadProgress: (e) => {
        let percentage = Math.round((e.loaded * 100) / e.total) || 0;
        if (percentage <= 100) {
          updateFileList(_file, {percent: percentage, status: "uploading"});
          if (onProgress) {
            onProgress(percentage, _file);
          }
        }
      }
    }).then(resp => {
      updateFileList(_file, {status: "success", response: resp.data});
      if (onSuccess) {
        onSuccess(resp.data, _file);
      }
      if (onChange) {
        onChange(_file);
      }
    }).catch(err => {
      updateFileList(_file, {status: "error", response: err});
      if (onError) {
        onError(err, _file);
      }
      if (onChange) {
        onChange(_file);
      }
    })
  }
```

