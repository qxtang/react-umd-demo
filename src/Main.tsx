import React, { useCallback } from 'react';
import './style/global.less';
import Empty from './component/common/Empty';

// pages
import ChannelCode from './component/pages/ChannelCode';
import MaterialCenter from './component/pages/MaterialCenter';
import Greeting from './component/pages/Greeting';

const RENDER_MAP = {
    channelCode: <ChannelCode/>,
    materialCenter: <MaterialCenter/>,
    greeting: <Greeting/>,
};

const Main = (props) => {
    const { options: { page = '' } = {} } = props;

    const renderContent = useCallback(() => {
        return RENDER_MAP[page] || <Empty />;
    }, [page]);

    return (
        <div className="qwsdk_container">
            <h1>QW SDK DEMO</h1>
            <div className="border">{renderContent()}</div>
        </div>
    );
};

export default Main;
