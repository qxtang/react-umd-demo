const { name, version } = require('../../package.json');

export const initStyle = () => {
  const ENV = process.env.NODE_ENV || 'development';
  const isDev = ENV !== 'production';

  // 开发环境不需要载入，因为开发环境是 style-loader 插入 style 标签
  if (!isDev) {
    const key = `${new Date().toLocaleDateString()}-${name}-has-init-style`;

    if ((window as any)[key]) {
      return;
    }

    const link = document.createElement('link'),
      head = document.head || document.getElementsByTagName('head')[0];

    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = `//cdn.jsdelivr.net/npm/qw-sdk-demo@${version}/dist/qwsdk.css`;
    head.appendChild(link);

    (window as any)[key] = true;
  }
};
