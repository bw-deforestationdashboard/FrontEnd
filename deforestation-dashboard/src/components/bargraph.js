import React from "react";
import { Line } from 'react-chartjs-2';
import CountryData from '../data/CountryData'

const bargraph = (props) => {

    console.log(CountryData.countries.map(country => {
       return country.Data
    }))



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
        < Line data={data} />

    )
}

export default bargraph;