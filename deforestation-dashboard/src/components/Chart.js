
import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';


class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          '2017', '2018',
          '2019', '2020',
          '2021', '2022',
          '2023', '2024'
        ],
        datasets: [
          {
            stack: 'stack1',
            label: 'Forest Cover Brasil Sq/Km',
            data: [21, 57, 53, 70, 20, 34, 33, 56],
            backgroundColor: [
              'rgba(143, 99, 132, 0.6)',
              'rgba(143, 99, 132, 0.6)',
              'rgba(143, 99, 132, 0.6)',
              'rgba(143, 99, 132, 0.6)',
              'rgba(143, 99, 132, 0.6)',
              'rgba(143, 99, 132, 0.6)',
              'rgba(143, 99, 132, 0.6)',
              'rgba(143, 99, 132, 0.6)',

            ]
          },
          {
            stack: 'stack1',
            label: 'Forest Cover Colombia Sq/Km',
            data: [51, 59, 57, 54, 30, 67, 56, 71],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(255, 99, 132, 0.6)',

            ]
          },
          {
            stack: 'stack1',
            label: 'Forest Cover Peru Sq/Km',
            data: [67, 32, 59, 50, 20, 77, 66, 21],
            backgroundColor: [
              'rgba(134, 11, 132, 0.6)',
              'rgba(134, 11, 132, 0.6)',
              'rgba(134, 11, 132, 0.6)',
              'rgba(134, 11, 132, 0.6)',
              'rgba(134, 11, 132, 0.6)',
              'rgba(134, 11, 132, 0.6)',
              'rgba(134, 11, 132, 0.6)',
              'rgba(134, 11, 132, 0.6)',

            ]
          },
          {
            stack: 'stack1',
            label: 'Forest Cover Bolivia Sq/Km',
            data: [45, 72, 39, 10, 80, 17, 46, 31],
            backgroundColor: [
              'rgba(111, 11, 11, 0.6)',
              'rgba(111, 11, 11, 0.6)',
              'rgba(111, 11, 11, 0.6)',
              'rgba(111, 11, 11, 0.6)',
              'rgba(111, 11, 11, 0.6)',
              'rgba(111, 11, 11, 0.6)',
              'rgba(111, 11, 11, 0.6)',
              'rgba(111, 11, 11, 0.6)',
            ]
          },
          {
            stack: 'stack1',
            label: 'Forest Cover Ecuador Sq/Km',
            data: [77, 22, 39, 80, 25, 17, 36, 11],
            backgroundColor: [
              'rgba(180, 11, 11, 0.6)',
              'rgba(180, 11, 11, 0.6)',
              'rgba(180, 11, 11, 0.6)',
              'rgba(180, 11, 11, 0.6)',
              'rgba(180, 11, 11, 0.6)',
              'rgba(180, 11, 11, 0.6)',
              'rgba(180, 11, 11, 0.6)',
              'rgba(180, 11, 11, 0.6)',
            ]
          }
        ]
      }

    }
  }

  render() {
    return (
      <div className="chart">

        <Bar
          data={this.state.chartData}

          options={{
            title: {
              display: true,
              text: 'Deforestation Trends  for the Amazon Basin',
              fontSize: 25
            },
          }}
        />
      </div>
    )
  }
}

export default Chart; 