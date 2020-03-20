import React, { Component } from 'react';
import loadable from '@loadable/component';

import { isSSR } from '../../../../common/helper';

import Firestore from '../../../../components/Database/Firebase/Firestore';

const ReactChartJS2 = loadable(() => import('react-chartjs-2'), { fallback: null });

import style from './StatusPieChart.module.scss';

interface IProperty {}

interface IState {
  statusPieChart: IStatusPieChart;
};

interface IStatusPieChart {
  data: object;
  options: object;
}

interface IStatusOverview {
  id: string;
  sys_id: string;
  label: string;
  count: number;
  color: string;
}

export default class StatusPieChart extends Component<IProperty, IState> {

  public constructor(properties: any) {
    
    super(properties);

    this.state = {
      statusPieChart: {
        data: this.getStatusPieChartData(),
        options: this.getStatusPieChartOptions()
      }
    };
  }

  public componentDidMount(): void {
    if (! isSSR()) {
      this.fetchProjectsOnFireStore(); 
    }
  }

  private getStatusPieChartData(): object {
    return {
      labels: [
        'INFECTED',
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
            '#b5830f',
            '#38a169',
            '#a13838'
          ]
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
        bodyFontFamily: 'Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif'
      }
    };
  }

  private fetchProjectsOnFireStore(): void {
    
    Firestore.clearInstance();
    Firestore.initialize();
    Firestore.getInstance()
      .collection('ph-covid19-tracker-status-overview')
      .orderBy('order', 'desc')
      .get()
      .then(querySnapshot => { 
        const statusOverview = querySnapshot.docs.map((doc: any): IStatusOverview => {
          const document = doc.data();
          return {
            id: doc.id,
            sys_id: document.sys_id,
            label: document.label,
            count: document.count,
            color: document.color
          };
        });

        const statusPieChart = {
          data: {
            labels: statusOverview.map((details: IStatusOverview): string => {
              if (details.sys_id !== 'confirmed_cases') {
                return details.label;
              }
            }),
            datasets: [
              {
                label: 'COVID-19',
                data: statusOverview.map((details: IStatusOverview): number => {
                  if (details.sys_id !== 'confirmed_cases') {
                    return details.count;
                  } 
                }),
                backgroundColor: statusOverview.map((details: IStatusOverview): string => {
                  if (details.sys_id !== 'confirmed_cases') {
                    return details.color;
                  }
                })
              }
            ]
          },
          options: this.getStatusPieChartOptions()
        };
        
        this.setState({
          statusPieChart: statusPieChart
        });
      });
  }

  public render(): JSX.Element {
    return (
      <div id="ph-covid19-tracker-chart-status-pie-chart-component" className={style['container']}>
        <ReactChartJS2 data={this.state.statusPieChart.data} options={this.state.statusPieChart.options} type={'pie'} width={350} height={350} />
      </div>
    );
  }
}
