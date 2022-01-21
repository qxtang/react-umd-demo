import React from 'react';
import { render } from 'react-dom';
import Main from './Main';
import types from '../typings';

class QwSdk {
    options: types.QwSdkOptions;

    constructor(options = { container: '' }) {
        this.options = options;
    }

    setPrimaryColor(color: string) {
        console.log(color);
    }

    sayHello() {
        console.log(new Date(), 'hello，我是企微 sdk!!!');
    }

    render(options = { page: 'empty' }) {
        const { container } = this.options;
        let node = null;

        if (!container) throw new Error(`配置缺少包裹节点: ${container}`);

        if (!(container instanceof HTMLElement)) {
            node = window.document.getElementById(container);
            if (!node) throw new Error(`包裹节点未找到: ${container}`);
        } else {
            node = container;
        }

        return render(
            React.createElement(Main, { options }),
            node
        );
    }
}

export default QwSdk;
