import React, { Component } from 'react';
import './style/global.css';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { options } = this.props;

        return <div>你好: {JSON.stringify(options)}</div>;
    }
}

export default Main;
