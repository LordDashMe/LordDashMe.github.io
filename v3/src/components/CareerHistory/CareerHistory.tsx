import React, { Component } from 'react';

import style from './CareerHistory.module.scss';

interface IProperty {}

interface IState {
  careerHistoryDetails: IOrganization[];
}

interface IOrganization {
  id: string;
  logo: string;
  logoAlt: string;
  logoStyle: object;
  name: string;
  roles: IRole[];
}

interface IRole {
  id: string;
  name: string;
  term: string;
  highlights: IHighLight[];
}

interface IHighLight {
  id: string;
  name: string;
  logo: string;
  descriptions: string[];
}

export default class CareerHistory extends Component<IProperty, IState> {

  public constructor(properties: any) {

    super(properties);
    
    this.state = {
      careerHistoryDetails: [
        {
          id: 'nmi',
          logo: '/resources/img/companies/gma-nmi-logo.png',
          logoAlt: 'NMI',
          logoStyle: {
            width: '128px',
            maxWidth: '26%'
          },
          name: 'GMA New Media Inc. (NMI)',
          roles: [
            {
              id: 'analyst-web-developer',
              name: 'Analyst Developer',
              term: 'January 2019 - Present',
              highlights: [
                {
                  id: 'gno-seagames-2019-microsite',
                  name: 'GNO - SEA Games 2019 Microsite',
                  logo: 'fas fa-certificate',
                  descriptions: []
                },
                {
                  id: 'gno-sona-2019-microsite',
                  name: 'GNO - Sona 2019 Microsite',
                  logo: 'fas fa-certificate',
                  descriptions: []
                },
                {
                  id: 'gno-eleksyon-2019-microsite',
                  name: 'GNO - Eleksyon 2019 Microsite',
                  logo: 'fas fa-certificate',
                  descriptions: []
                },
                {
                  id: 'gno-coverstories',
                  name: 'GNO - Coverstories',
                  logo: 'fas fa-certificate',
                  descriptions: []
                },
                {
                  id: 'rookie-of-the-year-2019',
                  name: 'Rookie of the Year 2019',
                  logo: 'fas fa-medal',
                  descriptions: []
                },
                {
                  id: 'python',
                  name: 'Python',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'Falcon'
                  ]
                },
                {
                  id: 'php',
                  name: 'PHP',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'CodeIgniter'
                  ]
                },
                {
                  id: 'javascript',
                  name: 'JavaScript',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'NodeJS',
                    'Angular',
                    'RxJS',
                    'TypeScript',
                    'Web Worker'
                  ]
                },
                {
                  id: 'no-sql',
                  name: 'NoSQL',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'MongoDB'
                  ]
                },
                {
                  id: 'amazon-web-services',
                  name: 'Amazon Web Services',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'Simple Storage Service (S3)',
                    'Simple Queue Service (SQS)'
                  ]
                },
                {
                  id: 'meetup-conference-attended',
                  name: 'Meetup | Conference Attended',
                  logo: 'fas fa-users',
                  descriptions: [
                    'Women Techmakers Manila 2019 (March 30, 2019)',
                    'AWS Technical Essentials Day - AWS Philippines (October 29, 2019)',
                    'Shopify Meetup Manila (February 8, 2020)'
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'nw',
          logo: '/resources/img/companies/logo-nuworks.png',
          logoAlt: 'NW',
          logoStyle: {},
          name: 'NuWorks Interactive Labs, Inc. (NuWorks)',
          roles: [
            {
              id: 'backend-developer-and-devops',
              name: 'Back End Developer and DevOps',
              term: 'December 2017 - January 2019',
              highlights: [
                {
                  id: 'neuland-ph-website',
                  name: 'Neuland PH Website',
                  logo: 'fas fa-certificate',
                  descriptions: [
                    'Design and developed backend scripts for Rewards System, User Management System and Quiz Management System.',
                    'Developed a backend scripts to handle Image Coloring feature of the site.',
                    'Implemented web security standards.',
                    'Developed using Wordpress.',
                    'Handled deployment in test and production linux server.',
                    'Setup Nginx server.',
                    'Handled server setup for security standards.'
                  ]
                },
                {
                  id: 'decidium-ph-website',
                  name: 'Decidium PH Website',
                  logo: 'fas fa-certificate',
                  descriptions: [
                    'Backend and frontend integration.',
                    'Developed using Wordpress.',
                    'Handled deployment in test and production linux server.',
                    'Implemented web security standards.',
                    'Setup Nginx server.',
                    'Handled server setup for security standards.'
                  ]
                },
                {
                  id: 'monde-nissin-website',
                  name: 'Monde Nissin Website (Maintenance)',
                  logo: 'fas fa-certificate',
                  descriptions: [
                    'Handled some backend bug fixing and feature change request.'
                  ]
                },
                {
                  id: 'marlboro-website',
                  name: 'Marlboro Website (Maintenance)',
                  logo: 'fas fa-certificate',
                  descriptions: [
                    'Handled some backend bug fixing and feature change request.'
                  ]
                },
                {
                  id: 'nuworks-website',
                  name: 'NuWorks Website (Maintenance)',
                  logo: 'fas fa-certificate',
                  descriptions: [
                    'Designed and developed new page to handle email subscription.',
                  ]
                },
                {
                  id: 'belo-baby-website',
                  name: 'Belo Baby Website (Maintenance)',
                  logo: 'fas fa-certificate',
                  descriptions: [
                    'Handled some backend bug fixing and feature change request.'
                  ]
                },
                {
                  id: 'belo-men-website',
                  name: 'Belo Men Website (Maintenance)',
                  logo: 'fas fa-certificate',
                  descriptions: [
                    'Handled some backend bug fixing and feature change request.'
                  ]
                },
                {
                  id: 'continuous-integration',
                  name: 'Continuous Integration',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'Jenkins',
                    'Bitbucket Pipelines'
                  ]
                },
                {
                  id: 'os-virtualization',
                  name: 'OS Virtualization',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'Docker'
                  ]
                },
                {
                  id: 'php',
                  name: 'PHP',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'CodeIgniter'
                  ]
                },
                {
                  id: 'guest-speaker',
                  name: 'Guest Speaker',
                  logo: 'fas fa-microphone-alt',
                  descriptions: [
                    'Composer Basic Autoloading - NWTalks Meetup (May 11, 2018)',
                    'Hardening Wordpress Security - Coding Girl\'s Manila Meetup (January 26, 2018)'
                  ]
                },
                {
                  id: 'meetup-conference-attended',
                  name: 'Meetup | Conference Attended',
                  logo: 'fas fa-users',
                  descriptions: [
                    'Laravel PH Meetup (September 20, 2018)',
                    'Wordpress Wordcamp Manila 2018 (September 8, 2018)'
                  ]
                }
              ]
            },
            {
              id: 'backend-developer',
              name: 'Back End Developer',
              term: 'January 2017 - December 2017',
              highlights: [
                {
                  id: 'creamsilk-ph-website',
                  name: 'Creamsilk PH Website',
                  logo: 'fas fa-certificate',
                  descriptions: [
                    'Designed and develop backend scripts to support hair profiler feature for creamsilk 2017 campaign.',
                    'Implemented web security standards.',
                    'Communicated with other international ops team about the test and production server setup.',
                    'Developed using Wordpress.'
                  ]
                },
                {
                  id: 'imagenation-canon-ph-website',
                  name: 'Imagenation Canon PH Website (Maintenance)',
                  logo: 'fas fa-certificate',
                  descriptions: [
                    'Integrated payment gateway to support the 2017 image nation campaign.'
                  ]
                },
                {
                  id: 'chevrolet-ph-website',
                  name: 'Chevrolet PH Website',
                  logo: 'fas fa-certificate',
                  descriptions: [
                    'Designed and developed the CMS of the whole website using Laravel.',
                    'Backend and frontend integration for dyanmic content.',
                  ]
                },
                {
                  id: 'nestle-nestea-beach-2017-ph-microsite',
                  name: 'Nestle Nestea Beach 2017 PH Microsite',
                  logo: 'fas fa-certificate',
                  descriptions: [
                    'Integrated twitter and instagram API for hash tag management to support the Nestea Beach social media campaign 2017.',
                    'Developed using Drupal 7 to handle all the CMS part.'
                  ]
                },
                {
                  id: 'php',
                  name: 'PHP',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'Laravel',
                    'Drupal',
                    'Wordpress'
                  ]
                },
                {
                  id: 'meetup-conference-attended',
                  name: 'Meetup | Conference Attended',
                  logo: 'fas fa-users',
                  descriptions: [
                    'Laravel PH Meetup (July 28, 2017)',
                    'Manila Javascript Meetup (June 21, 2017)',
                    'Royale Rumble DevCon Meetup (January 26, 2017)'
                  ]
                },
                {
                  id: 'training',
                  name: 'Training',
                  logo: 'fas fa-book',
                  descriptions: [
                    'Laravel Training - Inventive Media (March 24 - 27, 2017)'
                  ]
                }
              ] 
            }
          ]
        },
        {
          id: 'gs3',
          logo: '/resources/img/companies/gs3_logo.svg',
          logoAlt: 'GS3',
          logoStyle: {},
          name: 'Global Strategic Solutions and Services, Inc. (GS3)',
          roles: [
            {
              id: 'web-and-mobile-developer',
              name: 'Web and Mobile Developer',
              term: 'June 2016 - January 2017',
              highlights: [
                {
                  id: 'formalistics-mobile-application',
                  name: 'Formalistics Mobile Application',
                  logo: 'fas fa-certificate',
                  descriptions: [
                    'Mobile version of the Formalistics Web Application.',
                    'Developed using Ionic v2 - Mobile Hybrid Framework to support multiple devices in a single source code.',
                    'Integrated Google Map API specific for client requirements to implement custom tracking system.'
                  ]
                },
                {
                  id: 'formalistics-web-application',
                  name: 'Formalistics Web Application',
                  logo: 'fas fa-certificate',
                  descriptions: [
                    'Contributed to the main source code of the custom framework used to make the web application.',
                    'Designed and developed RESTful API to port the mobile version.',
                    'Designed and developed custom compiler used by the form builder feature to support formula syntax.'
                  ]
                },
                {
                  id: 'php',
                  name: 'PHP',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'Laravel'
                  ]
                },
                {
                  id: 'javascript',
                  name: 'JavaScript',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'AngularJS'
                  ]
                },
                {
                  id: 'meetup-conference-attended',
                  name: 'Meetup | Conference Attended',
                  logo: 'fas fa-users',
                  descriptions: [
                    'PHP Conference 2016 Philippines - Key Speaker: Rasmus Lerdorf (October 13 - 14, 2016)'
                  ]
                }
              ]
            },
            {
              id: 'web-developer',
              name: 'Web Developer',
              term: 'April 2015 - June 2016',
              highlights: [
                {
                  id: 'forma-eforms-web-application',
                  name: 'Formalistics Web Application',
                  logo: 'fas fa-certificate',
                  descriptions: [
                    'Designed and developed a custom scripts to support customization.',
                    'Implemented business requirements.',
                    'Handled deployment in windows server.',
                    'Technical support.'
                  ]
                },
                {
                  id: 'php',
                  name: 'PHP',
                  logo: 'far fa-lightbulb',
                  descriptions: []
                },
                {
                  id: 'javascript',
                  name: 'JavaScript',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'JQuery'
                  ]
                }
              ]
            }
          ]
        },
        {
          id: 'sti',
          logo: '/resources/img/companies/STI300-min-super.png',
          logoAlt: 'STI',
          logoStyle: {
            width: '100px',
            maxWidth: '25%',
            marginRight: '5px' 
          },
          name: 'STI College of Santa Maria Bulacan',
          roles: [
            {
              id: 'bsit',
              name: 'Bachelor of Science in Information Technology',
              term: '2011 - 2015',
              highlights: [
                {
                  id: 'cumlaude',
                  name: 'Cum Laude',
                  logo: 'fas fa-trophy',
                  descriptions: []
                },
                {
                  id: 'best_programmer_of_the_year',
                  name: 'Best Programmer of the Year (Batch 2015)',
                  logo: 'fas fa-medal',
                  descriptions: []
                },
                {
                  id: 'best_in_thesis',
                  name: 'Best in Thesis',
                  logo: 'fas fa-medal',
                  descriptions: [
                    'Team Leader and Main Programmer',
                    'Requirements gathering, Design, Implementation and Testing of proposed project - Map Locator (Android Application) for the selected beneficiary.'
                  ]
                },
                {
                  id: '1st_runnerup_in_app_and_running_mobile_development',
                  name: '1st Runner-up in App and Running',
                  logo: 'fas fa-star',
                  descriptions: [
                    'Competition for Mobile Application Development.',
                    'STI Tagisan ng Talino - Dagupan Cluster Level (February 2015)'
                  ]
                }
              ]
            }
          ]
        }
      ]
    };
  }

  private getCareerHistoryDetails(): JSX.Element[] {
    return this.state.careerHistoryDetails.map(organization => {
      return (
        <div key={organization.id} className={style['organization']}>
          <span>
            <img className={style['organization-logo']} src={organization.logo} alt={organization.logoAlt} style={organization.logoStyle}/>
            <h3 className={style['organization-name']}>{organization.name}</h3>
          </span>
          {this.getOrganization(organization)}
        </div>
      );
    });
  }

  private getOrganization(organization: IOrganization): JSX.Element[] {
    return organization.roles.map(role => {
      return (
        <div key={role.id} className={style['position-wrapper']}>
          <div className={style['position']}>
            <h4 className={style['role']}>{role.name}</h4>
            <p className={style['role-term']}><i className="far fa-calendar-alt" aria-hidden="true"></i> <small>{role.term}</small></p>
          </div>
          <div className={style['highlight']}>
            {this.getRoles(role)}
          </div>
        </div>
      );
    });
  }

  private getRoles(role: IRole): JSX.Element[] {
    return role.highlights.map(highlight => {
      return (
        <div key={highlight.id} className={style['highlight-wrapper']}>
          <span>
            <i className={style['highlight-marker'] + ' ' + highlight.logo} aria-hidden="true"></i>
            <p className={style['highlight-label']}>{highlight.name}</p>
          </span>
          {this.getHighlights(highlight)}
        </div>  
      );
    });
  }

  private getHighlights(highlight: IHighLight): JSX.Element[] {
    return highlight.descriptions.map((description, index) => {
      return (
        <div key={index} className={style['highlight-description']}>
          <span>
            <i className={style['highlight-specific-marker'] + ' fas fa-angle-right'} aria-hidden="true"></i>
            <p className={style['highlight-specific-label']}>{description}</p>
          </span>
        </div>
      );
    });
  }

  public render(): JSX.Element {
    return (
      <div id="career-history-component" className={style['container']}>
        {this.getCareerHistoryDetails()}
      </div>
    );
  }
}
