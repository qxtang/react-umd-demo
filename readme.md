# 天下苦 iframe 久矣

项目 demo，将业务组件打包成 sdk，并且不受接入方技术栈限制，达到一次编写，处处运行，以公司的企微中台产品为例

# 解决的问题

- iframe 的痛点：各种隔离、页面刷新状态丢失、对接方式不友好等问题（收发消息大部分靠 postMessage）
- 开发环境统一使用 react 技术栈，接入方调用时不受技术栈限制
- 调用时有类型提示

# 使用示例

- [静态页面](https://codesandbox.io/s/qw-sdk-demo-static-shc61?file=/index.html)
- [Vue](https://codesandbox.io/s/qw-sdk-demo-vue-hxqhe?file=/src/App.vue)
- [React](https://codesandbox.io/s/qw-sdk-demo-react-fk63m?file=/src/App.js)

# 安装

## 方式一：script 引入

```html
<script src="//cdn.jsdelivr.net/npm/qw-sdk-demo@latest/dist/qwsdk.js"></script>
```

## 方式二：npm 安装

```sh
npm install qw-sdk-demo
```

```js
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
  page: 'ChannelCode', // 字符串，要渲染哪一个中台组件
  permission: ['00', '01'], // 权限点

  // 自定义包裹元素样式
  style: {
    border: '1px solid red',
  },
  className: 'abc',
});
```

## 方式二（React 组件）

当然在 react 也可以使用方式一

```jsx
import QwSdk from 'qw-sdk-demo/dist/qwsdk-react';

export default function App() {
  return (
    <div className="App">
      <QwSdk
        page="ChannelCode"
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

[typings/index.d.ts](https://github.com/qxtang/qw-sdk-demo/blob/master/typings/index.d.ts)

# 其他

- 使用 preact/compat 代替 react 以减小打包体积

# TODO

- 跨域鉴权？
- 全局状态管理？
