import React from 'react';

export default function Map (props) {
    const { year } = props;
    return(
        <div>
            <img className="img-map" src={require(`../assets/pct_forest_coverage_${year}_map.png`)} alt={`World map of forest area percentage from ${year}`} />
        </div>
    );
};
