import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Country from './Country';
import { DataContext } from '../contexts/DataContext'

export default function CountryList () {
    const data = useContext(DataContext)
    console.log(data[0])

    const [countries, setCountries] = useState([]);
    // console.log(CountryData)
    let obj = data[0].Country;
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