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

    const toArrayOfArrays = (array) => {
        return Object.entries(array).filter((subArray) => subArray[0] !== "Country" && subArray[0] !== "Code");
    }

    // TODO - for percent data
    // const percentArray = toArrayOfArrays(***percent-data-goes-here***).map((subArray) => subArray[1]);
    // console.log(percentArray)

    return (
        <div className="content CountryView">
           <h2>Countries</h2>
            {countries.map((countryArray, index) => {
                const yearArray = toArrayOfArrays(countryArray);

                return (
                    <Country
                    code={countryArray.Code}
                    name={countryArray.Country}
                    yearArray={yearArray}
                    key={index}
                    />
                )
            })}
        </div>
        
    );
};
