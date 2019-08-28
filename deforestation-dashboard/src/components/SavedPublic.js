import React, {useState, useContext} from 'react';
import {Line} from 'react-chartjs-2';
import sampleData from '../sampleData.js'

export default function SavedPublic() {
   const [myArray, setMyArray] = useState([])
   const countryID = 2;
   const currentArray = [];
   currentArray.push(sampleData[0]["1990 [YR1990]"][countryID])
   currentArray.push(sampleData[0]["2000 [YR2000]"][countryID])
   currentArray.push(sampleData[0]["2016 [YR2016]"][countryID])
   console.log(currentArray)

   const data = {
      labels: ["1990", "2000", "2016"],
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
          data: currentArray
      }]
      }
   
   
   return (
      <div>
        <h2>World Bank Data</h2>
            <Line data={data} />
      </div>
   )
}
