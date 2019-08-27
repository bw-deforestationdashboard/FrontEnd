import React, { useState, useEffect } from 'react';
import CountryData from '.././sampleData';
import axios from 'axios';
import Country from './Country';

export default function CountryList () {
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