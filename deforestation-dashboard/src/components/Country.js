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
import yellow from '@material-ui/core/colors/yellow';

export default function Country(props) {
  const { yearArray } = props;
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

        head: {
          backgroundColor: yellow[400],
        }
      
    }));

  const createData = (name ) => {
    return { name };
  }

  const rows = [
    createData("Forest cover as % of land surface")
  ];

  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead className={classes.head}>
              <TableRow>
                <TableCell>{props.name}</TableCell>
                {yearArray.map((year) => {
                  return <TableCell align="right">{year[0]}</TableCell>
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  {yearArray.map((year) => {
                    return <TableCell align="right">{Math.round(year[1])}</TableCell>
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </CardContent>
    </Card>
  );
}
