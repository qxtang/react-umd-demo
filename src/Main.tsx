/**
 * @description 主入口组件，同时也是 react 组件形式下导出给用户的组件
 */
import React, { useCallback, useEffect } from 'react';
import './style/global.less';
import { ConfigProvider } from 'antd';
import types from '../typings';
import { isEmpty } from 'lodash';
import { initStyle } from './utils/tools';
import ErrorBoundary from './component/ErrorBoundary';
import { Provider } from 'react-redux';
import { store } from './store/index';

initStyle();

const Main: React.FC<types.RenderOptions> = props => {
  const { type = 'NotFound', className = '', style = {}, theme = {}, pageProps = {} } = props;

  // 设置 antd 主题
  useEffect(() => {
    if (!isEmpty(theme)) {
      ConfigProvider.config({ theme });
    }
  }, [theme]);

  // 懒加载需要渲染的中台页面
  const pageRender = useCallback(() => {
    // 对接入方进行鉴权
    // ...

    const Result = React.lazy(() => import(`./pages/${type}`));
    return <Result {...pageProps} />;
  }, [type]);

  return (
    <React.StrictMode>
      <ErrorBoundary>
        <Provider store={store}>
          <div className={`qw_sdk_demo_container ${className}`} style={style}>
            <React.Suspense fallback={<div>loading...</div>}>{pageRender()}</React.Suspense>
          </div>
        </Provider>
      </ErrorBoundary>
    </React.StrictMode>
  );
};

export default Main;
