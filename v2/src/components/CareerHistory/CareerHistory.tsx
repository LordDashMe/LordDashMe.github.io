import React, { Component } from 'react';

import './CareerHistory.scss';

interface IProperty {}

interface IState {
  careerHistoryDetails: Array<object>;
}

export default class CareerHistory extends Component<IProperty, IState> {

  public constructor(properties: any) {
    super(properties);
    this.state = {
      careerHistoryDetails: [
        {
          organization: {
            logo: 'resources/img/companies/STI300.png',
            name: 'STI College of Santa Maria Bulacan',

          }
        }
      ]
    };
  }

  private getCareerHistoryDetails(): JSX.Element[] {
    return [];
  }

  public render(): JSX.Element {
    return (
      <div className="CareerHistory">
        
        <div className="ch-organization">
          
          <img className="ch-org-logo" src="resources/img/companies/STI300.png" alt="STI"/>
          <h2 className="ch-org-name">STI College of Santa Maria Bulacan</h2>
          
          <div className="ch-position-wrapper">
            <div className="ch-position">
              <h3 className="ch-role">Bachelor of Science in Information Technology</h3>
              <p className="ch-role-term"><i className="far fa-calendar-alt" aria-hidden="true"></i> <small>2011 - 2015</small></p>
            </div>
            <div className="ch-organization-details">
              <div className="ch-highlight-wrapper">
                <p className="ch-highlight"><i className="fas fa-trophy" aria-hidden="true"></i> Cum Laude</p>
              </div>
              <div className="ch-highlight-wrapper">
                <p className="ch-highlight"><i className="fas fa-medal" aria-hidden="true"></i> Best Programmer of the Year (Batch 2015)</p>
              </div>
              <div className="ch-highlight-wrapper">
                <p className="ch-highlight"><i className="fas fa-medal" aria-hidden="true"></i> Best in Thesis</p>
                <div className="ch-highlight-desc">
                  <p className="ch-highlight-specific"><i className="fas fa-angle-right" aria-hidden="true"></i> Team Leader and Main Programmer</p>
                  <p className="ch-highlight-specific"><i className="fas fa-angle-right" aria-hidden="true"></i> Map Locator (Android Application)</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}
