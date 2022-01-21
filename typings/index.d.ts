import { CSSProperties } from 'react';

export as namespace QwSdk;

export default QwSdk;

type PageType = 'notfound' | 'channelCode' | 'materialCenter' | 'greeting'

declare class QwSdk {
    constructor(options: QwSdk.QwSdkOptions);
    sayHello(): void;
    setPrimaryColor(color: string): void; // 设置主题颜色
    render(options: QwSdk.RenderOptions): void; // 执行渲染
}

declare namespace QwSdk {
    interface QwSdkOptions {
        container: string | HTMLElement; // 渲染节点 id 或 元素
    }

    // 调用 render 方法的参数，同时也是 react 组件形式时的组件属性
    interface RenderOptions {
        page: PageType;  // 渲染哪一个中台组件
        permission?: string[];  // 中台权限点
        className?: string; // 包裹元素 className
        style?: CSSProperties; // 包裹元素 style
    }
}
