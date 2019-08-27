import React, { useState, useEffect, useContext } from 'react';
// import CountryData from '.././sampleData';
import axios from 'axios';
import Country from './Country';
import { DataContext } from '../contexts/DataContext'

export default function CountryList () {
    const data = useContext(DataContext)
    console.log(data[0].Country)

    const [countries, setCountries] = useState([]);
    console.log(countries);

    // useEffect(() => {
    //     axios.get('').then((res)=> {
    //         setCountries(res.data);
    //         console.log(res)
    //     })
    // }, [])
    return ([
        <header>Countries</header>,
        countries.map( ctry => {
            return (
                <Country
                name={ctry.name}
                />
            )
        })
    ]);
};