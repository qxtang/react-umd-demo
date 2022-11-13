# React UMD Demo

- 借助 webpack 能力，将 react 组件打包成 umd 供接入方使用，支持 script 引入和 React 组件两种使用方式，不受接入方技术栈限制的方案调研
- iframe 的痛点：[Why Not Iframe](https://www.yuque.com/kuitos/gky7yw/gesexv)
- 打包成 umd 或组件有类型提示，对接更友好

## 使用场景

- 例如公司里使用 cocos 开发的一个小游戏项目，需要接入使用 react 开发的通用组件时
- 公司各个前端项目使用了不同的技术栈，需要接入通用组件时
- 封装 js sdk

## 使用示例

- [静态页面](https://codesandbox.io/s/react-umd-demo-static-shc61?file=/index.html)
- [Vue](https://codesandbox.io/s/react-umd-demo-vue-hxqhe?file=/src/App.vue)
- [React](https://codesandbox.io/s/react-umd-demo-react-fk63m?file=/src/App.js)

## 安装和使用

### 方式一：script 引入（推荐）

引入

```html
<script src="//cdn.jsdelivr.net/npm/react-umd-demo@latest/dist/react-umd-demo.js"></script>
```

添加一个容器

```html
<div id="container"></div>
```

生成

```javascript
const instance = new ReactUmdDemo({
  container: 'container' // 容器元素 id
});

instance.render({
  type: 'Page1'
});
```

### 方式二：npm 安装

```sh
npm install react-umd-demo
```

```js
import ReactUmdDemo from 'react-umd-demo';

const instance = new ReactUmdDemo({
  container: 'container' // 容器元素 id
});

instance.render({
  type: 'Page1'
});
```

React 组件形式:

```jsx
import ReactUmdDemo from 'react-umd-demo/dist/react-umd-demo-component';

export default function App() {
  return (
    <div className="App">
      <ReactUmdDemo
        type="Page1"
        // ...其他配置
      />
    </div>
  );
}
```

## 存在的问题

- 鉴权方案
- 全局样式污染接入方
- 使用 react 组件形式接入，接入方 react 版本太低，无法使用某些 react api

## 其他

- 使用了 preact/compat 代替 react 以减小打包体积
