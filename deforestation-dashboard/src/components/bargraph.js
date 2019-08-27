import React from "react";
import { Line } from 'react-chartjs-2';
import CountryData from '../data/CountryData'

const bargraph = (props) => {

    console.log(CountryData)

    const data = {
        labels: [],
        datasets: [{
            label: "Time Series (yr)",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            countries: [],
        }]
    }


    return (
        < Line ref="chart" data={data} />

    )
}

export default bargraph;