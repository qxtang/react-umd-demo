import React from 'react';
import { render } from 'react-dom';
import Main from './Main';

class QwSdk {
    constructor(options = {}) {
        this.options = options;
    }

    seyHello() {
        console.log('hello，我是企微 sdk！！');
    }

    render(container, callback = () => {}) {
        let node = null;
        container = container || this.options.container;

        if (!container) throw new Error(`配置缺少包裹节点: ${container}`);

        if (!(container instanceof HTMLElement)) {
            node = window.document.getElementById(container);
            if (!node) throw new Error(`包裹节点未找到: ${container}`);
        } else {
            node = container;
        }

        return render(<Main options={this.options} />, node, callback);
    }
}

export default QwSdk;
