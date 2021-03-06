import React, { Component } from 'react';

import style from './Author.module.scss';

interface IProperty {}

interface IState {
  author: IAuthor;
}

interface IAuthor {
  image: IImage;
  description: string;
}

interface IImage {
  path: string;
  alt: string;
}

export default class Author extends Component<IProperty, IState> {

  public constructor(properties: any) {

    super(properties);
    
    this.state = {
      author: {
        image: {
          path: '/resources/img/author/profile-tianzifang-min-super.jpg',
          alt: 'Joshua Clifford Reyes'
        },
        description: 'CLEAN CODE | DOMAIN DRIVEN | TEST DRIVEN | DESIGN PATTERNS AND BEST PRACTICES'
      }
    };
  }

  public render(): JSX.Element {
    return (
      <div id="author-component" className={style['container']}>
        <div className={style['display-photo']}>
          <img src={this.state.author.image.path} alt={this.state.author.image.alt} />
        </div>
        <p className={style['description']}>{this.state.author.description}</p>
      </div>
    );
  }
}
