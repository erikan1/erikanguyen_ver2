import React from "react"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// react-icons
import {
  DiAtom,
  DiAws,
  DiPython,
  DiRuby,
  DiReact,
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiGoogleCloudPlatform,
  DiMarkdown,
  DiBootstrap,
  DiFirebase,
  DiNodejs,
  DiNpm,
  DiPhotoshop,
  DiRor,
  DiVisualstudio,
  DiWindows,
  DiYeoman,
  DiLinux,
} from "react-icons/di"
import { IconContext } from "react-icons"

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Card from "components/Card/Card.jsx"
import CardBody from "components/Card/CardBody.jsx"
import CardHeader from "components/Card/CardHeader.jsx"
import Profile from "components/Profile/Profile.jsx"

import teamStyle from "assets/jss/material-kit-react/views/teamStyle.jsx"

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div
        className={classes.container}
        style={{
          minHeight: "100vh",
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconContext.Provider value={{ size: "6em" }}>
          <GridContainer style={{ textAlign: "center" }}>
            <GridItem xs={12} sm={12} md={6}>
              <Card>
                <CardHeader color="danger">ABOUT ME</CardHeader>
                <CardBody>
                  <Profile />
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card>
                <CardHeader color="danger">SKILLS</CardHeader>
                <CardBody>
                  <DiJavascript1 />
                  <DiReact />
                  <DiNodejs />
                  <DiPython />
                  <DiHtml5 />
                  <DiCss3 />
                  <DiBootstrap />
                  <DiMarkdown />
                  <DiRuby />
                  <DiRor />
                  <DiNpm />
                  <DiYeoman />
                  <DiAtom />
                  <DiVisualstudio />
                  <DiPhotoshop />
                  <DiGoogleCloudPlatform />
                  <DiAws />
                  <DiFirebase />
                  <DiWindows />
                  <DiLinux />
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </IconContext.Provider>
      </div>
    )
  }
}

export default withStyles(teamStyle)(TeamSection)
