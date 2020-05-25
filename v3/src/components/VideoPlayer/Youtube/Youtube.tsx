import React, { Component } from 'react';

import { isSSR } from '../../../common/helper';

declare global {
  interface Window {
    YT: any;
  }
}

interface IProperty {}

interface IState {}

export default class Youtube extends Component<IProperty, IState> {

  public componentDidMount(): void {
    if (! isSSR()) {
      this.initializeVendor();
    }
  }

  private initializeVendor(): void {
    if (! window.YT) {
      var script = document.createElement('script');
      script.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(script);
      console.log('[LDM] VideoPlayer_Youtube_Component: has been initialized.');
    } 
  }

  public render(): null {
    return null;
  }
}
