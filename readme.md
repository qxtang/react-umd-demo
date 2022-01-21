# 天下苦 iframe 久矣

一个中台前端组件解决方案项目 demo，以公司的企微中台产品为例

# 解决的问题

-   开发环境统一使用 react 技术栈，接入方调用时不受技术栈限制
-   解决 iframe 的痛点：使用起来不友好、各种隔离

# 使用示例

-   [静态页面](https://codesandbox.io/s/qw-sdk-demo-static-shc61?file=/index.html)
-   [Vue](https://codesandbox.io/s/qw-sdk-demo-vue-hxqhe?file=/src/App.vue)
-   [React](https://codesandbox.io/s/qw-sdk-demo-react-fk63m?file=/src/App.js)

# 安装

## 1、script 引入

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/qw-sdk-demo/dist/qwsdk.css" />
<script src="//cdn.jsdelivr.net/npm/qw-sdk-demo/dist/qwsdk.min.js"></script>
```

## 2、npm 安装

```sh
npm install qw-sdk-demo
```

```js
import 'qw-sdk-demo/dist/qwsdk.css';
import QwSdk from 'qw-sdk-demo';
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
    page: 'channelCode', // 字符串，要渲染哪一个中台组件
    permission: ['00', '01'], // 权限点

    // 自定义样式
    style: {
        border: '1px solid red',
    },
    className: 'abc',
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
                page="channelCode"
                permission={['00', '01']}
                className="abc"
                style={{ color: 'red' }}
                // ...其他配置
            />
        </div>
    );
}
```

# 所有参数和方法

[typings/index.d.ts](https://gitee.com/qx9/qw-sdk-demo/blob/master/typings/index.d.ts)

# 可用命令

-   `yarn dev` 本地运行
-   `yarn build` 打包

# 其他

-   一些原因项目无法使用 redux，使用 context 管理全局状态
-   为了减小 css 的体积不用 css module
-   使用 preact/compat 代替 react 以减小打包体积

# TODO

-   能否使用 webpack 的分包
-   跨域请求
-   如何零污染调用方样式
