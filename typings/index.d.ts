import { CSSProperties } from 'react';
import { Theme } from 'antd/lib/config-provider/context';

export as namespace QwSdk;

export default QwSdk;

declare class QwSdk {
  constructor(options: QwSdk.QwSdkOptions);
  setTheme(theme: Theme): void; // 设置主题颜色
  render(options: QwSdk.RenderOptions): void; // 生成渲染
}

declare namespace QwSdk {
  type RenderType = 'NotFound' | 'ChannelCode' | 'MaterialCenter' | 'Greeting' | 'ReduxTest';

  interface QwSdkOptions {
    container: string | HTMLElement; // 渲染节点 id 或 元素
  }

  // 调用 render 方法的参数，同时也是 react 组件形式时的组件属性
  interface RenderOptions {
    type: RenderType; // 渲染哪一个中台组件
    permission?: string[]; // 中台权限点
    className?: string; // 包裹元素 className
    style?: CSSProperties; // 包裹元素 style
    theme?: Theme; // antd 主题配置

    // 自定义当前渲染组件的属性
    componentProps?: {
      onGetChannelInfoBtnClick?: (info: any) => void; // 渠道码页面获取渠道码信息按钮点击事件，用于测试传入自定义事件
    };
  }
}
