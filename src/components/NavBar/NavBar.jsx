import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { GiCastle,GiScrollUnfurled, GiIdCard, GiTreasureMap } from "react-icons/gi";
import { Typography } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    color: "black",padding: 0
  },
  toolbarButtons: {
    marginLeft: "auto",
  },
};

class MenuAppBar extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <AppBar position="fixed" style={{background: "#fff"}}>
        <Toolbar><Typography>Just a small town girl, living in an IT world.</Typography>
        <span className={classes.toolbarButtons}>
        <IconButton  href='#home' className={classes.menuButton} aria-label="User ID">
              <GiCastle/>
        </IconButton>
        <IconButton  href='#profile' className={classes.menuButton} aria-label="User ID">
              <GiIdCard/>
        </IconButton>
        <IconButton href='#projects' className={classes.menuButton} aria-label="Completed Quests">
              <GiScrollUnfurled/>
        </IconButton>
        <IconButton href='#travel' className={classes.menuButton} aria-label="World Map">
              <GiTreasureMap/>
        </IconButton>
            </span>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);