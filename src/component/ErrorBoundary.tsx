/**
 * @description: 错误边界
 */
import React from 'react';

interface IState {
  error: string;
}

class ErrorBoundary extends React.Component<React.PropsWithChildren<any>, IState> {
  constructor(props: never) {
    super(props);
    this.state = {
      error: ''
    };
  }

  getDerivedStateFromError(err: Error) {
    return {
      error: err.message
    };
  }

  componentDidCatch(err: Error) {
    this.setState({
      error: err.message
    });
  }

  render(): React.ReactNode {
    const { children } = this.props;
    const { error } = this.state;

    if (error) {
      return <div className="error">抱歉，出错了：{error}</div>;
    }

    return children;
  }
}

export default ErrorBoundary;
