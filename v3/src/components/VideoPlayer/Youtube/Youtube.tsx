import React, { Component } from 'react';

import { isSSR } from '../../../common/helper';

interface IProperty {
  elementId: string;
  videoId: string;
  height: string;
  width: string;
  origin?: string;
}

interface IState {}

declare const YT: any;

export default class Youtube extends Component<IProperty, IState> {

  private player: any = null;

  public constructor(properties: any) {
    super(properties);

    this.state = {};
  }

  public componentDidMount(): void {
    if (! isSSR()) {
      this.onYouTubeIframeAPIReady();
    }
  }

  private onYouTubeIframeAPIReady(): void {

    if ((typeof YT !== "undefined") && YT && YT.Player) {

      let origin = window.location.protocol + '//' + window.location.host;
      
      if (typeof this.props.origin !== 'undefined' && this.props.origin) {
        origin = this.props.origin;
      }

      this.player = new YT.Player(this.props.elementId, {
        height: this.props.height,
        width: this.props.width,
        videoId: this.props.videoId,
        playerVars: {
            origin: origin,
            rel: 0,
            playsinline: 1
        }
      });
      
    } else {
      console.info('Waiting for YT to load properly.');
      setTimeout(this.onYouTubeIframeAPIReady.bind(this), 500);
    }
  }

  public render(): JSX.Element {
    return (<div id={this.props.elementId}></div>);
  }
}
