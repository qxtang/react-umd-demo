/**
 * @description 主入口组件，同时也是 react 组件形式下导出给用户的组件
 */
import React, { useCallback, useEffect } from 'react';
import './style/global.less';
import { ConfigProvider } from 'antd';
import QwSdk from '../typings';
import { isEmpty } from 'lodash';

const Main: React.FC<QwSdk.RenderOptions> = (props) => {
  const {
    page = 'NotFound',
    className = '',
    style = {},
    theme = {},
    pageProps = {}
  } = props;

  // 设置 antd 主题
  useEffect(() => {
    if (!isEmpty(theme)) {
      ConfigProvider.config({ theme });
    }
  }, [theme]);

  // 懒加载需要渲染的中台页面
  const pageRender = useCallback(() => {
    const Result = React.lazy(() => import(`./component/pages/${page}`));
    return (<Result {...pageProps}/>);
  }, [page]);

  return (
    <div
      className={`qw_sdk_demo_container ${className}`}
      style={style}
    >
      <React.Suspense fallback={<div>loading...</div>}>
        {pageRender()}
      </React.Suspense>
    </div>
  );
};

export default Main;
