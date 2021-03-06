import React, { Component } from 'react';
import loadable from '@loadable/component';

import { isSSR } from '../../../../../common/helper';

const ReactChartJS2 = loadable(() => import('react-chartjs-2'), { fallback: null });

import { IStatusOverview } from '../StatusOverview';

import style from './StatusPieChart.module.scss';

interface IProperty {}

interface IState {
  statusPieChart: IStatusPieChart;
  totalConfirmedCases: number;
  percentageVisibility: boolean;
  percentageValue: number;
};

interface IStatusPieChart {
  data: object;
  options: object;
}

export default class StatusPieChart extends Component<IProperty, IState> {

  public constructor(properties: any) {
    
    super(properties);

    this.state = {
      statusPieChart: {
        data: this.getStatusPieChartData(),
        options: this.getStatusPieChartOptions()
      },
      totalConfirmedCases: 0,
      percentageVisibility: false,
      percentageValue: 0,
    };
  }

  public componentDidMount(): void {
    if (!isSSR()) {
      this.fetchProjectsOnFireStore(); 
    }
  }

  private getStatusPieChartData(): object {
    return {
      labels: [
        'ACTIVE CASES',
        'RECOVERED',
        'DEATHS'
      ],
      datasets: [
        {
          label: 'COVID-19',
          data: [
            0,
            10,
            0
          ],
          backgroundColor: [
            '#e29e01',
            '#60a138',
            '#a13838'
          ],
          borderColor: '#fff',
          borderWidth: 0,
          hoverBorderColor: [
            '#fff',
            '#fff',
            '#fff'
          ],
          hoverBorderWidth: 0
        }
      ]
    };
  }

  private getStatusPieChartOptions(): object {
    return {
      maintainAspectRatio: false,
      legend: {
        display: false,
        labels: {
          boxWidth: 16,
          fontSize: 14,
          fontColor: '#000',
          fontFamily: 'Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif'
        }
      },
      tooltips: {
        bodyFontFamily: 'Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif',
        custom: (tooltip: any): void => {
          if (tooltip.opacity <= 0) {
            this.unsetPercentageValue();
          }
        }
      },
      onClick: (chartEvent: any, chartState: any): void => {
        if (!chartState || typeof chartState[0] === 'undefined' || !chartState[0]) {
          return;
        }
        if (typeof chartState[0]._index !== 'undefined') {
          this.setPercentageValue(chartState[0]._index);
        }
      },
      onHover: (chartEvent: any, chartState: any): void => {
        if (!chartState || typeof chartState[0] === 'undefined' || !chartState[0]) {
          return;
        }
        if (typeof chartState[0]._index !== 'undefined') {
          this.setPercentageValue(chartState[0]._index);
        }
      }
    };
  }

  private unsetPercentageValue(): void {

    const currentState: IState = {...this.state};

    currentState.percentageVisibility = false;
    currentState.percentageValue = 0;

    this.setState(currentState);
  }

  private setPercentageValue(specificIndex: number): void {

    const currentState: IState = {...this.state};
    const specificCaseCount: any = currentState.statusPieChart.data['datasets'][0].data[specificIndex];

    if (specificCaseCount > 0 && currentState.totalConfirmedCases > 0) {
      currentState.percentageVisibility = true;
      currentState.percentageValue = parseFloat(((specificCaseCount / currentState.totalConfirmedCases) * 100).toFixed(2));
    }

    this.setState(currentState);
  }

  private fetchProjectsOnFireStore(): void {

    import(/* webpackChunkName: "Firestore" */ '../../../../../components/Database/Firebase/Firestore').then((Firestore) => {
      
      Firestore.default.clearInstance();
      Firestore.default.initialize();
      Firestore.default.getInstance()
        .collection('ph-covid19-tracker-status-overview')
        .orderBy('order', 'desc')
        .get()
        .then((querySnapshot: any): void => { 

          const totalConfirmedCases: any = querySnapshot.docs[0].data().count;
          
          const statusOverview: any = (querySnapshot.docs)
            .filter((doc: any): IStatusOverview | boolean => {
              
              const document: any = doc.data();
              
              if (document.sys_id === 'confirmed_cases') {
                return false;
              } 

              return doc;
              
            }).map((doc: any): IStatusOverview => {
              
              const document: any = doc.data();
              
              return {
                id: doc.id,
                sysId: document.sys_id,
                label: document.label,
                count: document.count,
                color: document.color,
                order: document.order
              };
            });

          const currentState: IState = {...this.state};

          currentState.statusPieChart.data['labels'] = statusOverview.map((details: IStatusOverview): string => {
            return details.label;
          });

          currentState.statusPieChart.data['datasets'][0]['data'] = statusOverview.map((details: IStatusOverview): number => {
            return details.count; 
          });

          currentState.statusPieChart.data['datasets'][0]['backgroundColor'] = statusOverview.map((details: IStatusOverview): string => {
            return details.color;
          });

          currentState.totalConfirmedCases = totalConfirmedCases;
          
          this.setState(currentState);
        });

    });
  }

  private getPercentage(): JSX.Element | null {
    
    if (this.state.percentageVisibility) {
      return (
        <div className={style['percentage']}><span id="percentage-value">{this.state.percentageValue}</span>%</div>
      );
    }

    return null;
  }

  public render(): JSX.Element {
    return (
      <div id="ph-covid19-tracker-status-overview-chart-status-pie-chart-component" className={style['container']}>
        {this.getPercentage()}
        <ReactChartJS2 data={this.state.statusPieChart.data} options={this.state.statusPieChart.options} type={'pie'} width={300} height={300} />
      </div>
    );
  }
}
