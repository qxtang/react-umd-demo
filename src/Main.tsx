/**
 * @description 主入口组件，同时也是 react 组件形式下导出给用户的组件
 */
import React, { useCallback } from 'react';
import './style/global.less';
import NotFound from './component/common/NotFound';
import Context from './context';

// pages
import ChannelCode from './component/pages/ChannelCode';
import MaterialCenter from './component/pages/MaterialCenter';
import Greeting from './component/pages/Greeting';
import QwSdk from '../typings';

const RENDER_MAP = {
    notfound: <NotFound/>,
    channelCode: <ChannelCode/>,
    materialCenter: <MaterialCenter/>,
    greeting: <Greeting/>,
};

const Main: React.FC<QwSdk.RenderOptions> = (props) => {
    const {
        page = 'notfound',
        className = '',
        style = {}
    } = props;

    const renderContent = useCallback(() => {
        return RENDER_MAP[page as keyof typeof RENDER_MAP] || <NotFound/>;
    }, [page]);

    return (
        <Context.Provider value={{}}>
            <div
                className={`qw_sdk_demo_container ${className}`}
                style={style}
            >{renderContent()}</div>
        </Context.Provider>
    );
};

export default Main;
