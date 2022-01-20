import React from 'react';
import { render } from 'react-dom';
import 'es6-promise/auto';
import MainComponent from './Main';

class QwSdk {
    constructor(options = {}) {
        this.options = options;
    }

    render(container, callback = () => { }) {
        let node = null;
        container = container || this.options.container;

        if (!container) throw new Error(`配置缺少包裹节点: ${container}`);

        if (!(container instanceof HTMLElement)) {
            node = window.document.getElementById(container);
            if (!node) throw new Error(`包裹节点未找到: ${container}`);
        } else {
            node = container;
        }

        return render(<MainComponent options={this.options} />, node, callback);
    }
}

module.exports = QwSdk;
