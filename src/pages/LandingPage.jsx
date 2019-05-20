import React from "react"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import IconButton from "@material-ui/core/IconButton"

import { FiChevronsDown } from "react-icons/fi";
import { FaGithub,FaTv,FaBookReader,
  FaInstagram,
  FaLinkedinIn,FaSpotify } from "react-icons/fa";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx"

class LandingPage extends React.Component {
  render() {
    const { classes} = this.props
    return (
          <div className={classes.container} style={{minHeight:"100vh",
          display:"flex",
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'}}>
            <GridContainer>
              <GridItem xs={12} style={{textAlign:"center"}}>
                <h1 className={classes.title}>"To live long, live slowly." </h1>
                <h2 className={classes.subtitle} style={{textAlign:"right"}}>
                - Marcus Tullius Cicero
                </h2>
                <IconButton
                  color="secondary"
                  href="https://github.com/erikan1"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><FaGithub /></IconButton>
                <IconButton
                  color="secondary"
                  href="https://www.linkedin.com/in/nguyenerika/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaLinkedinIn />
                </IconButton>
                <IconButton
                  color="secondary"
                  href="https://www.instagram.com/erikamoji/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaInstagram />
                </IconButton>
                <IconButton
                  color="secondary"
                  href="https://open.spotify.com/user/1214920295?si=HhLlcktETEWLuHQQMf9uoA"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaSpotify />
                </IconButton>
                <IconButton
                  color="secondary"
                  href=" https://www.goodreads.com/erikanguyen"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaBookReader />
                </IconButton>
                <IconButton
                  color="secondary"
                  href="https://myanimelist.net/animelist/erikanguyen"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaTv />
                </IconButton>
                <br/>
                <IconButton color="secondary" href="#profile"><FiChevronsDown/></IconButton>
              </GridItem>
            </GridContainer>
          </div>
    )
  }
}

export default withStyles(landingPageStyle)(LandingPage)
