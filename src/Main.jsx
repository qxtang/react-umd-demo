import React from 'react';
import './style/global.css';

const Main = (props) => {
    const { options } = props;
    return (
        <div className="qwsdk_container">
            <h1>QW SDK DEMO</h1>
            <pre>渲染配置：{JSON.stringify(options, null, 2)}</pre>
        </div>
    );
};

export default Main;
