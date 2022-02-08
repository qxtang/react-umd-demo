/**
 * @description QwSdk类，导出给用户使用
 */
import React from 'react';
import { render } from 'react-dom';
import types from '../typings';
import { Theme } from 'antd/lib/config-provider/context';
import Main from './Main';
import { ConfigProvider } from 'antd';

class QwSdk {
  options: types.QwSdkOptions;

  constructor(options = { container: '' }) {
    this.options = options;
  }

  // 设置 antd 主题
  setTheme(theme: Theme) {
    ConfigProvider.config({ theme });
  }

  sayHello() {
    console.log(new Date(), 'hello，我是企微中台 sdk!!!');
  }

  // 生成渲染
  render(options: types.RenderOptions) {
    const { container } = this.options;
    let node = null;

    if (!container) throw new Error(`配置缺少容器节点: ${container}`);

    if (!(container instanceof HTMLElement)) {
      node = window.document.getElementById(container);
      if (!node) throw new Error(`容器节点未找到: ${container}`);
    } else {
      node = container;
    }

    return render(
      React.createElement(Main, options),
      node
    );
  }
}

export default QwSdk;
