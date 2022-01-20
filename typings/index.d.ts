export as namespace QwSdk;

export default QwSdk;

declare class QwSdk {
    constructor(options: QwSdk.QwSdkOptions);
    render(element: string | HTMLElement): void;
}

declare namespace QwSdk {
    interface QwSdkOptions {

        // 中台权限点
        permission: string[];

        // 渲染哪一个页面
        page: 'channelCode' | 'materialCenter'
    }

}
