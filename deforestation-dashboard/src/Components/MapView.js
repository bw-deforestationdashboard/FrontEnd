import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Map from './Map';

export default function MapView () {
    const [map, setMap] = useState([]);

    if(!map){
       return <p>Loading map data...</p>
    }

    return ([
        <header><Map /></header>,

    ]);
};