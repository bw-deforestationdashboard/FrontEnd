import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './Country';

export default function CountryList () {
    const [countries, setCountries] = useState(null);//set state
      
    useEffect(() => {
        axios.get('https://countries-api-test.herokuapp.com/api/countries')
         .then((res)=> {
             const filteredData = res.data.filter(country => {
                return country.Code !== "HKG" && 
                        country.Code !== "MAC" && 
                        country.Code !== "MCO" && 
                        country.Code !== "SDN"
            })
            setCountries(filteredData);
            // console.log(filteredData)
         })
         .catch(err => console.log(err))
    }, [])

    if(!countries){
       return (
        <div className="loading">
            <h2>Loading country data...</h2>
            <p>Special thanks to <a href="https://github.com/drolon1126">Daniel Rolon</a> for saving our backend</p>
        </div>
       )
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
