import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export default function Country(props) {
    const useStyles = makeStyles(theme => ({
        card: {
          maxWidth: 345,
        },
        root: {
            width: '100%',
            marginTop: theme.spacing(3),
            overflowX: 'auto',
          },
          table: {
            minWidth: 650,
          },
        
      }));

      function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Forest cover as % of land surface', 159, 6.0, 24, 4.0),

];

const classes = useStyles();

    return (
        <Card>
           <CardContent>
           {/* {props.name} */}
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>{props.name}</TableCell>
            <TableCell align="right">1990</TableCell>
            <TableCell align="right">2000</TableCell>
            <TableCell align="right">2016</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </CardContent>
            
            
        </Card>
    );
};
