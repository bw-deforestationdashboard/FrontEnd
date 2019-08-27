import React, { useState, useEffect } from './node_modules/react';

import axios from './node_modules/axios';
import Country from './Country';

export default function CountrySearch () {
    const [countries, setCountries] = ([]);

    useEffect(() => {
        axios.get('https://api.brewerydb.com/v2/beer/WHQisc/hops/?key=1edd56c6463bb95e3affc78c869cc95c').then((res)=> {
            setCountries(res);
        })
    }, [])
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