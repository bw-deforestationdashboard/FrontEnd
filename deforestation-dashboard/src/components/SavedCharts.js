import React, { useState, useEffect, useContext } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Paper from "@material-ui/core/Paper";

import { SavedContext } from "../contexts/SavedContext";

const SavedCharts = props => {
  const { saved, removeItem } = useContext(SavedContext);

  return (
    <div className="content CountryView">
      {saved.map(i => {
        return(<Card>
            <Paper>
            <CardContent>
                <img
              className="img-chart"
              src={require(`../assets/charts/${i}.png`)}
            /></CardContent>
            </Paper>
            <CardActions>
                <Button size="medium" style={{fontSize: "1.3rem"}} onClick={()=>removeItem(i)}>Remove from My Charts</Button>
            </CardActions> 
          </Card>)
      })}
    </div>
  );
};

export default SavedCharts;
