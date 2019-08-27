import React, { useState, useEffect } from 'react';
import CountryData from '.././sampleData';
import axios from 'axios';
import Country from './Country';

export default function CountryList () {
    const [countries, setCountries] = useState([]);
    let obj = CountryData.Country;
    let countriesArr = Object.values(obj);//made object into an array of values
    
    // useEffect(() => {
    //     axios.get('').then((res)=> {
    //         setCountries(res.data);
    //         console.log(res)
    //     })
    // }, [])

    useEffect(() => {
        setCountries(countriesArr)
    }, [])

    if(!countries){
       return <p>Loading country data...</p>
    }

    return ([
        <header>Countries</header>,
        countries.map( ctry => {
            return (
                <Country
                name={ctry}
                />
            )
        })
    ]);
};