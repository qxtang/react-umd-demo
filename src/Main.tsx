/**
 * @description 主入口组件，同时也是 react 组件形式下导出给用户的组件
 */
import React, { useCallback, useEffect } from 'react';
import './style/global.less';
import { ConfigProvider } from 'antd';
import QwSdk from '../typings';

// pages TODO 异步导入
import ChannelCode from './component/pages/ChannelCode';
import MaterialCenter from './component/pages/MaterialCenter';
const Greeting = React.lazy(() => import('./component/pages/Greeting'));
import NotFound from './component/common/NotFound';

const RENDER_MAP = {
    notfound: NotFound,
    channelCode: ChannelCode,
    materialCenter: MaterialCenter,
    greeting: Greeting,
};

const Main: React.FC<QwSdk.RenderOptions> = (props) => {
    const {
        page = 'notfound',
        className = '',
        style = {},
        theme = {}
    } = props;

    const renderContent = useCallback(() => {
        const C = RENDER_MAP[page as keyof typeof RENDER_MAP] || NotFound;
        return <C/>;
    }, [page]);

    useEffect(() => {
        ConfigProvider.config({ theme });
    }, [theme]);

    return (
        <div
            className={`qw_sdk_demo_container ${className}`}
            style={style}
        >{renderContent()}</div>
    );
};

export default Main;
