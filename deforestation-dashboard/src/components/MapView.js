import React, { useState } from 'react';

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
            <p className="map-desc">This collection of choropleth maps shows the percent of land area covered by forest in 212 countries in each year between 1990 and 2016. Forest coverage data is taken from the World Bank’s World Development Indicators data catalog. Country boundary data is taken from Thematic Mapping’s World Borders dataset. The same World Bank data used to generate the historical maps was used to predict forest coverage for the period 2017 to 2024. Those predictions are reflected in the maps at the bottom of the page.</p>
            <h2>Global Forest Cover</h2>
            <div className="select-year">
                <p>Select a year:</p>
                <select onChange={handleYear}>
                    {yearArray.map(yearItem => {
                        return <option value={yearItem}>{yearItem}</option>
                    })}
                </select>
            </div>
            <Map year={year}/>
            <h3>Timelapse</h3>
            <img className="img-map"  alt="Forest Coverage" src={require(`../assets/pct_forest_coverage_1990_to_2016_map.gif`)} />
            <h2>Global Forest Cover Predictions</h2>
            <div className="select-year">
                <p>Select a year:</p>
                <select onChange={handlePredictionYear}>
                    {predictionYearArray.map(yearItem => {
                        return <option value={yearItem}>{yearItem}</option>
                    })}
                </select>
            </div>
            <Map year={predictionYear} />
            <h3>Timelapse</h3>
            <img className="img-map"  alt="Forest Coverage Predictions" src={require(`../assets/pct_forest_coverage_predictions_2017_to_2024_map.gif`)} />
        </div>
    );
};
