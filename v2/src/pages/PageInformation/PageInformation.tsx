import React, { Component } from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Section from '../../components/Section/Section';
import Footer from '../../components/Footer/Footer';

import style from './PageInformation.module.scss';

interface IProperty {
  id: string;
  pageTitle: string;
  title: string;
  primaryIcon: string;
  description: string;
}

interface IState {}

export default class PageInformation extends Component<IProperty, IState> {

  public render(): JSX.Element {

    document.title = this.props.pageTitle;
    
    return (
      <div className={style['container']}>
        <NavigationBar />
        <div className={style['wrapper']}>
          <Section id={this.props.id} 
                   title={this.props.title} 
                   showThematicBreak={false} 
                   showBorderTop={false}>
            <div className={style['content']}>
              <i className={style['icon'] + ' ' + this.props.primaryIcon}></i>
              <p className={style['description']}>{this.props.description}</p>
            </div>
          </Section>
        </div>
        <Footer isFixedPosition={true}/>
      </div>
    );
  }
}
