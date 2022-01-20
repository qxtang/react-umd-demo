# QW-SDK-DEMO

# 解决的问题

-   接入方调用企微中台能力不受技术栈限制
-   解决 iframe 的痛点：使用起来不友好、各种隔离

# 使用示例

-   [静态页面](https://codesandbox.io/s/qw-sdk-demo-static-shc61?file=/index.html)
-   [Vue](https://codesandbox.io/s/qw-sdk-demo-vue-hxqhe?file=/src/App.vue)
-   [React](https://codesandbox.io/s/qw-sdk-demo-react-fk63m?file=/src/App.js)

# 安装方式

## 1、script 引入

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/qw-sdk-demo/dist/qwsdk.css" />
<script src="//cdn.jsdelivr.net/npm/qw-sdk-demo/dist/qwsdk.min.js"></script>
```

## 2、npm 安装

```sh
npm i --save qw-sdk-demo
```

# 使用

## 方式一

添加一个容器

```html
<div id="qw-container"></div>
```

生成

```javascript
const qw = new QwSdk({
    container: 'qw-container', // 容器元素 id
});

qw.render({
    page: 'channelCode', // 要渲染哪一个中台组件
    permission: ['00', '01'], // 权限点
    callback: () => {
        console.log('渲染完成~');
    },
});
```

## 方式二（React 组件）

```jsx
import QwSdk from 'qw-sdk-demo/dist/qwsdk-react';
import 'qw-sdk-demo/dist/qwsdk.css';

export default function App() {
    return (
        <div className="App">
            <QwSdk
                options={{
                    page: 'channelCode',
                    // ...其他配置
                }}
            />
        </div>
    );
}
```

# 所有参数

[typings/index.d.ts](https://gitee.com/qx9/qw-sdk-demo/blob/master/typings/index.d.ts)

# TODO

-   antd、react、react-dom 太大了能否分包、按需打包
-   能否使用更小的 preact
-   添加修改主题色方法或配置项
-   能否使用 redux（不行就 context）
-   如何跨域请求
    -   cors-anywhere
    -   在 BFF 配置允许跨域白名单

# 其他

-   仅作功能演示，为了简洁所以开发环境许多功能没有，比如 less、css module、typescript
