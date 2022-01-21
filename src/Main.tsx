import React, { useCallback } from 'react';
import './style/global.less';
import Empty from './component/common/Empty';

// pages
import ChannelCode from './component/pages/ChannelCode';
import MaterialCenter from './component/pages/MaterialCenter';
import Greeting from './component/pages/Greeting';
import QwSdk from '../typings';

interface IProp {
    options: QwSdk.RenderOptions
}

const RENDER_MAP = {
    empty: <Empty />,
    channelCode: <ChannelCode />,
    materialCenter: <MaterialCenter />,
    greeting: <Greeting />,
};

const Main: React.FC<IProp> = (props) => {
    const { options: { page = 'empty' } = {} } = props;

    const renderContent = useCallback(() => {
        return RENDER_MAP[page as keyof typeof RENDER_MAP] || <Empty />;
    }, [page]);

    return (
        <div className="qw_sdk_demo_container">{renderContent()}</div>
    );
};

export default Main;
