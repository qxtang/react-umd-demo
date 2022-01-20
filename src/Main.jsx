import React, { useCallback } from 'react';
import './style/global.css';
import ChannelCode from './component/ChannelCode';
import MaterialCenter from './component/MaterialCenter';
import Greeting from './component/Greeting';

const RENDER_MAP = {
    channelCode: <ChannelCode/>,
    materialCenter: <MaterialCenter/>,
    greeting: <Greeting/>,
};

const Main = (props) => {
    const { options: { page = '' } = {} } = props;

    const renderContent = useCallback(() => {
        return RENDER_MAP[page] || '未知页面';
    }, [page]);

    return (
        <div className="qwsdk_container">
            <h1>QW SDK DEMO</h1>
            <div className="border">{renderContent()}</div>
        </div>
    );
};

export default Main;
