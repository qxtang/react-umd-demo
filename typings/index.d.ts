export as namespace QwSdk;

export default QwSdk;

declare class QwSdk {
    constructor(options: QwSdk.QwSdkOptions);
    render(element: string | HTMLElement): void;
}

declare namespace QwSdk {
    interface QwSdkOptions {
        // 渲染节点id（也可以直接通过 render 方法传进来）
        container?: string;

        // 中台权限点
        permission?: string[];

        // 渲染哪一个页面
        page: 'channelCode' | 'materialCenter'
    }

}
