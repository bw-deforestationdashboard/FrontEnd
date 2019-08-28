import React from 'react';
import {Line} from 'react-chartjs-2';

export default function SavedPublic() {

   const data = {
      labels: ["1990", "1995", "2000", "2005", "2010", "2016"],
      datasets: [{
          label: 'Forest Coverage',
          fill: true,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: []
      }]
      }
   
   
   return (
      <div>
        <h2>World Bank Data</h2>
            <Line rdata={data} />
      </div>
   )
}
