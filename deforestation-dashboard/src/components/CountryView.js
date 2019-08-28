import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Country from './Country';
import { DataContext } from '../contexts/DataContext'

export default function CountryList () {
    const data = useContext(DataContext)//state management

    const [countries, setCountries] = useState([]);//set state
    let obj = data[0].Country;//access countries
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
        countries.map( (ctry, index) => {
            return (
                <Country
                name={ctry}
                key={index}
                />
            )
        })
    ]);
};
