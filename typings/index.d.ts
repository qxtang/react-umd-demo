export as namespace QwSdk;

export default QwSdk;

type QwComponentType = 'channelCode' | 'materialCenter' | 'greeting'

declare class QwSdk {
    constructor(options: QwSdk.QwSdkOptions);
    setPrimaryColor(color: string): void;
    sayHello(): void;
    render(options: {
        page: QwComponentType,  // 渲染哪一个中台组件
        permission?: string[],  // 中台权限点
        callback?: () => any,   // 调用 reactDom.render 方法的回调
    }): void;
}

declare namespace QwSdk {
    interface QwSdkOptions {
        // 渲染节点 id 或 元素
        container: string | HTMLElement;
    }
}
