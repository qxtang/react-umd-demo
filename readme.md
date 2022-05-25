- 将 react 开发的业务组件打包成 umd 供接入方使用，不受接入方技术栈限制的方案调研，以公司的企微中台产品为例
- iframe 的痛点：[Why Not Iframe](https://www.yuque.com/kuitos/gky7yw/gesexv)
- 打包成 umd 或组件有类型提示，对接更友好

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
  container: 'qw-container' // 容器元素 id
});

qw.render({
  type: 'ChannelCode', // 字符串，要渲染哪一个中台组件
  permission: ['00', '01'], // 权限点

  // 自定义包裹元素样式
  style: {
    border: '1px solid red'
  },
  className: 'abc'
});
```

## 方式二：React 组件

```jsx
import QwSdk from 'qw-sdk-demo/dist/qwsdk-react';

export default function App() {
  return (
    <div className="App">
      <QwSdk
        type="ChannelCode"
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

# 不推荐使用 npm 包接入

将每个微前端发布为一个 npm 包，并让宿主将所有微前端应用作为依赖项，这意味着只要有一个包更新，即使是小版本更新比如修复了小 bug，也需要通知所有宿主应用升级这些包并且重新构建一次。非常不建议使用这种方案

# 其他

- 使用 preact/compat 代替 react 以减小打包体积

# 存在的问题

- 登录态、鉴权方案
- 样式污染问题
- react 版本与接入方不一致问题
