import React, {useContext} from "react";
import {SavedContext} from '../contexts/SavedContext'

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';

// import yellow from "@material-ui/core/colors/yellow";

export default function Country(props) {
  const { yearArray } = props;
  const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345
    },
    root: {
      width: "80%",
      margin: "0 auto",
      marginTop: theme.spacing(3),
      overflowX: "auto"
    },
    table: {
      minWidth: 650
    },
    head: {
      backgroundColor: "#f5d132"
    },
    expand: {
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    }
  }));

  const createData = name => {
    return { name };
  };

  const rows = [createData("Forest cover as sq km of land surface")];

  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const [selected, setSelected] = React.useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  const {addItem} = useContext(SavedContext)

  return (
    <Card>
      <CardContent>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead className={classes.head}>
              <TableRow>
                <TableCell
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: "bold",
                    lineHeight: "1"
                  }}
                >
                  {props.name}
                </TableCell>
                {yearArray.map(year => {
                  return (
                    <TableCell align="right" style={{ fontSize: "1.6rem" }}>
                      {year[0]}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ fontSize: "1.5rem", minWidth: "220px" }}
                  >
                    Forest cover as km<sup>2</sup> of land surface
                  </TableCell>
                  {yearArray.map(year => {
                    return (
                      <TableCell align="right" style={{ fontSize: "1.3rem" }}>
                        {Math.round(year[1])} km<sup>2</sup>
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        <CardActions>
          <Button size="medium" style={{fontSize: "1.3rem"}}
            onClick={()=>{
              addItem(props["code"])
              setSelected(true)
            }}>
            {selected ? "Save to My Charts" : "Saved to My Charts"}

          </Button>
          <Button
            size="medium"
            style={{ fontSize: "1.3rem", margin: "0 auto" }}
            className={clsx(classes.expand)}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            {!expanded ? "Click to display chart" : "Click to close"}
          </Button>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <img className="img-chart" alt="" src={require(`../assets/charts/${props.code}.png`)} />
          </CardContent>
        </Collapse>
      </CardContent>
    </Card>
  );
}
