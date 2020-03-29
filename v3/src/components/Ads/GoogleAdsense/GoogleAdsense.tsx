import React, { Component } from 'react';

import { isSSR } from '../../../common/helper';

declare global {
  interface Window {
    adsbygoogle?: any;
  }
}

interface IProperty {}

interface IState {}

export default class GoogleAdsense extends Component<IProperty, IState> {

  public componentDidMount(): void {
    if (! isSSR()) {
      this.initializeVendor();
    }
  }

  private initializeVendor(): void {
    if (!window.adsbygoogle) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      document.body.appendChild(script);
      console.log('GoogleAdsense_Component: Google Adsense loaded!'); 
    }
  }

  public render(): JSX.Element {
    return (
      <div id="ads-google-adsense-component">
        {this.props.children}
      </div>
    );
  }
}
