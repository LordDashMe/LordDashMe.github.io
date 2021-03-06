import React, { Component } from 'react';

import style from './NavigationBar.module.scss';

interface INavigationBarProperty {}

interface INavigationBarState {
  brandName: string;
  routes: Array<IRoutes>;
  collapseStyle: object;
  toggleCollapse: boolean;
}

interface IRoutes {
  id: string;
  href: string;
  label: string;
  icon: string;
}

export default class NavigationBar extends Component<INavigationBarProperty, INavigationBarState> {

  public constructor(properties: any) {

    super(properties);
    
    this.state = {
      brandName: 'JOSHUA CLIFFORD REYES',
      routes: [
        {
          id: 'home',
          href: '/v2/',
          label: 'HOME',
          icon: 'fas fa-home',
        },
        {
          id: 'contact',
          href: '/v2/contact/',
          label: 'CONTACT',
          icon: 'fas fa-paper-plane'
        },
        {
          id: 'projects',
          href: '/v2/projects/',
          label: 'PROJECTS',
          icon: 'fas fa-magic'
        }
      ],
      collapseStyle: {
        'display': 'none'
      },
      toggleCollapse: false,
    };
  }

  private defaultDetails(): JSX.Element {
    return (
      <div className="navbar-header page-scroll">
        <button onClick={this.toggleCollapse.bind(this, '')} 
                type="button" 
                className={'navbar-toggle ' + style['navigation-bar-toggle']} 
                data-toggle="collapse" 
                data-target="#navigation-bar-collapsable">
          <span className="sr-only">Toggle navigation</span><i className="fa fa-bars"></i> MENU
        </button>
        <h1 className={'navbar-brand ' + style['navigation-bar-title']}>{this.state.brandName}</h1>
      </div>
    );
  }

  private toggleCollapse(): void {
    
    let toggled = false;
    let collapseStyle = {
      'display': 'none'
    };
    
    if (! this.state.toggleCollapse) {
      
      toggled = true;
      collapseStyle = {
        'display': 'block'
      };
    }

    const state = {...this.state};

    state['collapseStyle'] = collapseStyle;
    state['toggleCollapse'] = toggled;

    this.setState(state);
  }

  private getMenuLinks(): JSX.Element {
    return (
      <div className={'collapse navbar-collapse ' + style['navigation-bar-collapse']} 
           id="navigation-bar-collapsable" 
           style={this.state.collapseStyle}>
        <ul className="nav navbar-nav navbar-right">
          {this.getRoutes()}
        </ul>
      </div>
    );
  }

  private getRoutes(): Array<JSX.Element> {
    return this.state.routes.map(route => {

      const href = route.href;
      
      return (
        <li key={route.id} className="page-scroll">
          <a href={href} rel="nofollow">
            <i className={route.icon} aria-hidden="true"></i> {route.label}
          </a>
        </li>
      );
    });
  }

  public render(): JSX.Element {
    return (
      <div className={style['container']}>
        <nav className={'navbar navbar-fixed-top ' + style['navigation-bar']}>
          <div className="container">
            {this.defaultDetails()}
            {this.getMenuLinks()}
          </div>
        </nav>
      </div>
    );
  }
}
