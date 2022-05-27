import { CSSProperties } from 'react';
import { Theme } from 'antd/lib/config-provider/context';

export as namespace ReactUmdDemo;

export default ReactUmdDemo;

export interface AnyObj {
  [props: string]: any;
}

declare class ReactUmdDemo {
  constructor(options: ReactUmdDemo.ReactUmdDemoOptions);

  setTheme(theme: Theme): void; // 设置 antd 主题
  render(options: ReactUmdDemo.RenderOptions): void; // 生成渲染
}

declare namespace ReactUmdDemo {
  type PageName = 'NotFound' | 'ReduxTest' | 'Page1' | 'Page2';

  interface ReactUmdDemoOptions {
    container: string | HTMLElement; // 渲染节点 id 或 元素
  }

  // render 方法的参数，同时也是 react 组件形式时的组件属性
  interface RenderOptions {
    type: PageName; // 渲染哪一个页面
    className?: string; // 包裹元素 className
    style?: CSSProperties; // 包裹元素 style
    theme?: Theme; // antd 主题配置

    // 当前渲染组件的属性
    componentProps?: AnyObj;
  }
}
