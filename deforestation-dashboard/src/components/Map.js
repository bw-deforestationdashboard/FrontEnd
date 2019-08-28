import React from 'react';

export default function Map (props) {
    const { year } = props;
    return(
        <div>
            <img style={{ "width": "70%" }}src={require(`../assets/pct_forest_coverage_${year}_map.png`)} alt='' />
        </div>
    );
};
