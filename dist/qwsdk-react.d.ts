import * as React from 'react';
import types from '../typings';

declare class QwSdk extends React.Component<types.RenderOptions> {
  constructor(props: types.RenderOptions);
  render(): JSX.Element;
}

export default QwSdk;
