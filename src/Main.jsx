import React, { useCallback } from 'react';
import './style/global.css';
import ChannelCode from './component/ChannelCode';
import MaterialCenter from './component/MaterialCenter';
import Greeting from './component/Greeting';

const Main = (props) => {
    const { options: { page = '' } = {} } = props;

    const renderContent = useCallback(() => {
        switch (page) {
            case 'channelCode':
                return <ChannelCode />;
            case 'materialCenter':
                return <MaterialCenter />;
            case 'greeting':
                return <Greeting />;
            default:
                return '未知页面';
        }
    }, [page]);

    return (
        <div className="qwsdk_container">
            <h1>QW SDK DEMO</h1>
            <pre className="border">渲染配置：{JSON.stringify(props?.options, null, 2)}</pre>
            <div className="border">{renderContent()}</div>
        </div>
    );
};

export default Main;
