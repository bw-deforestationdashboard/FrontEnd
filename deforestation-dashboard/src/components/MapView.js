import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Map from './Map';

export default function MapView () {
    const [year, setYear] = useState(1990);
    const [predictionYear, setPredictionYear] = useState(2017)

    const yearArray = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016];

    const predictionYearArray = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]

    const handleYear = event => {
        setYear(event.target.value)
    }

    const handlePredictionYear = event => {
        setPredictionYear(event.target.value)
    }

    return (
        <div className="content MapView">
            <h2>Map</h2>
            <select onChange={handleYear}>
                {yearArray.map(yearItem => {
                    return <option value={yearItem}>{yearItem}</option>
                })}
            </select>
            <Map year={year}/>
            <h2>Prediction Maps</h2>
            <select onChange={handlePredictionYear}>
                {predictionYearArray.map(yearItem => {
                    return <option value={yearItem}>{yearItem}</option>
                })}
            </select>
            <Map year={predictionYear} />
        </div>
    );
};
