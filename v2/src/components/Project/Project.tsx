import React, { Component } from 'react';

import style from './Project.module.scss';

interface IProperty {}

interface IState {
  projects: Array<IProjects>;
}

interface IProjects {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
}

export default class Project extends Component<IProperty, IState> {

  public constructor(properties: any) {

    super(properties);
    
    this.state = {
      projects: [
        {
          title: 'GITHUB REPOSITORIES',
          description: 'All of my projects are stored in the Github, from there you can check how I build things from scratch.',
          image: 'resources/img/projects/github-repositories.png',
          imageAlt: 'GITHUB REPOSITORIES',
          link: 'https://github.com/LordDashMe/?tab=repositories'
        },
        {
          title: 'PERSONAL PHP TOOLS',
          description: 'My personal tools that I always used, all are written in PHP. I created this tools to automate some of my common tasks.',
          image: 'resources/img/projects/personal-tools.jpg',
          imageAlt: 'PERSONAL PHP TOOLS',
          link: 'http://lorddashme-php-packages.epizy.com/?i=1'
        },
        {
          title: 'SKOOP',
          description: 'A freelance project. I handle mostly all of the backend and devops part of the website and I also interact with the DHL web services.',
          image: 'resources/img/projects/skoop.png',
          imageAlt: 'SKOOP',
          link: 'https://skoop.com.ph/'
        },
        {
          title: 'PHP SIMPLE CAPTCHA',
          description: 'The reason why I created this package is because I want to implement a simple anti-spam feature in my project that are written in PHP.',
          image: 'resources/img/projects/php-simple-captcha.jpg',
          imageAlt: 'PHP SIMPLE CAPTCHA',
          link: 'https://github.com/LordDashMe/php-simple-captcha/'
        },
        {
          title: 'KNOWLEDGE',
          description: 'Some of my documentations, tutorials and guides are all stored in this repositories. Remember "Everything that you need."',
          image: 'resources/img/projects/knowledge.jpg',
          imageAlt: 'KNOWLEDGE',
          link: 'https://github.com/LordDashMe/knowledge/'
        },
        {
          title: 'WORDPRESS SCAFFOLDING',
          description: 'I created my own starter pack for wordpress, this includes composer (a package manager in PHP), some security default configuration and better version management of wordpress.',
          image: 'resources/img/projects/wordpress-scaffolding.jpg',
          imageAlt: 'WORDPRESS SCAFFOLDING',
          link: 'https://github.com/LordDashMe/wordpress-scaffolding/'
        },
        {
          title: 'WORDPRESS DB SCHEMA EXTENDER',
          description: 'A wordpress plugin that will beautify your table schema and SQL query statement creation.',
          image: 'resources/img/projects/wordpress-db-schema-extender.jpg',
          imageAlt: 'WORDPRESS DB SCHEMA EXTENDER',
          link: 'https://github.com/LordDashMe/wordpress-db-schema-extender/'
        },
        {
          title: 'CSS DUMP DESIGNS',
          description: 'A collection of common CSS designs that I always used to my projects.',
          image: 'resources/img/projects/css-dump-designs.jpg',
          imageAlt: 'CSS DUMP DESIGNS',
          link: 'https://lorddashme.github.io/css-dump-designs/collections/'
        },
        {
          title: 'DOMAIN DRIVEN AND THE CLEAN ARCHITECTURE DESIGN',
          description: 'I\'ve made a diagram combining the principle of domain driven and the clean architecture design. I used this diagram to build some my latest personal projects.',
          image: 'resources/img/projects/domain-driven-and-the-clean-architecture-design.png',
          imageAlt: 'DOMAIN DRIVEN AND THE CLEAN ARCHITECTURE DESIGN',
          link: 'https://lorddashme.github.io/archives/domain-driven-and-the-clean-architecture-design.html'
        }
      ]
    };
  }

  private getProjects(): Array<JSX.Element> {
    return this.state.projects.map((project) => {
      return (
        <div className={style['wrapper']}>
          <h3 className={style['title']}>{project.title}</h3>
          <p className={style['description']}>{project.description}</p>
          <img alt={project.imageAlt} className={style['image']} src={project.image} />
          <a className={style['link']} href={project.link}>View More</a>
        </div>
      );
    });
  }

  public render(): JSX.Element {
    return (
      <div className={style['container']}>
        {this.getProjects()}
      </div>
    );
  }
}