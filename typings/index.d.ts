export as namespace QwSdk;

export default QwSdk;

type QwComponentType = 'empty' | 'channelCode' | 'materialCenter' | 'greeting' | string

declare class QwSdk {
    constructor(options: QwSdk.QwSdkOptions);
    options: QwSdk.QwSdkOptions;
    sayHello(): void;
    setPrimaryColor(color: string): void; // 设置主题颜色
    render(options: QwSdk.RenderOptions): void; // 执行渲染
}

declare namespace QwSdk {
    interface QwSdkOptions {
        // 渲染节点 id 或 元素
        container: string | HTMLElement;
    }

    interface RenderOptions {
        page: QwComponentType;  // 渲染哪一个中台组件
        permission?: string[];  // 中台权限点
    }
}
