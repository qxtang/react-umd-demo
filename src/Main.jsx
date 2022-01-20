import React from 'react';
import './style/global.css';

const Main = (props) => {
    const { options } = props;
    return (
        <div className="qwsdk_container">
            <div>你好</div>
            <pre>{JSON.stringify(options, null, 2)}</pre>
        </div>
    );
};

export default Main;
