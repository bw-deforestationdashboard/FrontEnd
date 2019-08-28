import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Country from './Country';
import { DataContext } from '../contexts/DataContext'

export default function CountryList () {
    const data = useContext(DataContext)//state management

    const [countries, setCountries] = useState([]);//set state
      
    // useEffect(() => {
    //     axios.get('').then((res)=> {
    //         setCountries(res.data);
    //         console.log(res)
    //     })
    // }, [])

    useEffect(() => {
        setCountries(data)
    }, [])

    if(!countries){
       return <p>Loading country data...</p>
    }

    return ([
        <header>Countries</header>,
        countries.map( (ctry, index) => {
            const yearArray = Object.entries(ctry).filter((array) => array[0] !== "Country" && array[0] !== "Code");

            return (
                <Country
                name={ctry.Country}
                yearArray={yearArray}
                key={index}
                />
            )
        })
    ]);
};
