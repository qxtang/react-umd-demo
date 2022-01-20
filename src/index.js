import React from 'react';
import { render } from 'react-dom';
import Main from './Main';

class QwSdk {
    constructor(options = {}) {
        this.options = options;
    }

    setPrimaryColor(color) {
        console.log(color);
    }

    sayHello() {
        console.log(new Date(), 'hello，我是企微 sdk!!!');
    }

    render(options = {}) {
        const { container } = this.options;
        const { callback = () => {} } = options;
        let node = null;

        if (!container) throw new Error(`配置缺少包裹节点: ${container}`);

        if (!(container instanceof HTMLElement)) {
            node = window.document.getElementById(container);
            if (!node) throw new Error(`包裹节点未找到: ${container}`);
        } else {
            node = container;
        }

        return render(<Main options={options}/>, node, callback);
    }
}

export default QwSdk;
