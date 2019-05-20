import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: "20px",
    boxShadow: "none"
  },
  table: {
    maxWidth: 700
  },
});

function Profile(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table>
        <TableBody className={classes.table}>
        <TableRow>
            <TableCell>Name:</TableCell>
            <TableCell align="right">Erika Nguyen</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Location:</TableCell>
            <TableCell align="right">Atlanta, Georgia</TableCell>
          </TableRow>
                    <TableRow>
            <TableCell>Distro:</TableCell>
            <TableCell align="right">Manjaro Linux 18.0.4 "Illyria"</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Brains:</TableCell>
            <TableCell align="right"><a href="https://www.16personalities.com/enfj-personality">ENFJ-T</a>, <a href="https://www.enneagraminstitute.com/type-2">Ennegram Type 2</a>, <a href="https://www.astrology.com/astrology-101/zodiac-signs/pisces">Pisces</a></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Heart:</TableCell>
            <TableCell align="right">Painting, Longboarding, FC Barcelona, Liverpool, La Furia Roja, Hockey, Harry Potter, Philosophy, Travel</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);