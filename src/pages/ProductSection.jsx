import React from "react"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Card from "components/Card/Card.jsx"
import CardBody from "components/Card/CardBody.jsx"
import CardFooter from "components/Card/CardFooter.jsx"
import Badge from 'components/Badge/Badge.jsx';
import Button from "@material-ui/core/Button"

import productStyle from "assets/jss/material-kit-react/views/productStyle.jsx"
import Emojify from 'react-emojione'

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Emojify style={{height: 15, width: 15}}>
        <div className={classes.container} style={{minHeight:"100vh",
          display:"flex",
          flex: 1,
          paddingTop:50,
          justifyContent: 'center',
          alignItems: 'center'}}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <CardBody>
                  <h4 className={classes.cardTitle}>T.E.R.R.A.</h4>
                  <h5 className={classes.cardSubtitle}><span role="img" aria-label="trophy">🏆</span> Third Place - Best in Show</h5>
                  <Badge color="primary">javascript</Badge>
                  <Badge color="info">html5 / css3</Badge>
                  <Badge color="success">node.js</Badge>
                  <p>Built by connecting two Microsoft Azure Cognitive Services for T-Mobile to give a sentiment analysis to speech.</p>
                </CardBody>
                <CardFooter><Button size="small" color="secondary" href="https://myanimelist.net/animelist/erikanguyen"
                  target="_blank"
                  rel="noopener noreferrer">
          SOURCE
        </Button>
        <Button size="small" color="primary" href="https://myanimelist.net/animelist/erikanguyen"
                  target="_blank"
                  rel="noopener noreferrer">
          DEMO
        </Button>
                </CardFooter>  
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <CardBody>
                  <h4 className={classes.cardTitle}>PayPal Teen</h4>
                  <h5 className={classes.cardSubtitle}><span role="img" aria-label="trophy">🏆</span> 2nd Place,
                  <span role="img" aria-label="trophy">🏆</span> Best Idea,
                  <span role="img" aria-label="trophy">🏆</span> Best Implementation,
                  <span role="img" aria-label="trophy">🏆</span> Most Feasible/Viable </h5>
                  <Badge color="primary">typescript</Badge>
                  <Badge color="info">xml/css</Badge>
                  <Badge color="success">node.js</Badge>
                  <p>
                    Aims to bridge the gap in online shopping for teenagers to make responsible purchases with parents in the loop.
                  </p>
                </CardBody>
                <CardFooter><Button size="small" color="secondary" href="https://myanimelist.net/animelist/erikanguyen"
                  target="_blank"
                  rel="noopener noreferrer">
          SOURCE
        </Button>
        <Button size="small" color="primary" href="https://myanimelist.net/animelist/erikanguyen"
                  target="_blank"
                  rel="noopener noreferrer">
          DEMO
        </Button>
                </CardFooter>  
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <CardBody>
                  <h4 className={classes.cardTitle}>Vitals</h4>
                  <h5 className={classes.cardSubtitle}><span role="img" aria-label="trophy">🏆</span> Drive Usage of Existing Feedback app - Anthem</h5>
                  <Badge color="primary">javascript</Badge>
                  <Badge color="info">html5/css3</Badge>
                  <Badge color="success">node.js</Badge>
                  <p>
                    A webapp rebuild of an internal employee feedback application for Blue Cross Blue Shield of Georgia.
                  </p>
                </CardBody>
                <CardFooter>
                  <Button size="small" color="secondary" href="https://myanimelist.net/animelist/erikanguyen"
                  target="_blank"
                  rel="noopener noreferrer">
          SOURCE
        </Button>
        <Button size="small" color="primary" href="https://myanimelist.net/animelist/erikanguyen"
                  target="_blank"
                  rel="noopener noreferrer">
          DEMO
        </Button>
                </CardFooter>  
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <CardBody>
                  <h4 className={classes.cardTitle}>Hack-A-Bear</h4>
                  <h5 className={classes.cardSubtitle}><span role="img" aria-label="trophy">🏆</span> MLH Second Place - Best in Show</h5>
                  <Badge color="info">html5/css3</Badge>
                  <Badge color="danger">nlp api</Badge>
                  <p>
                    A Google Home Assistant/Chatbot made using NCR's API.
                  </p>
                </CardBody>
                <CardFooter>
        <Button size="small" color="secondary" href="https://myanimelist.net/animelist/erikanguyen"
                  target="_blank"
                  rel="noopener noreferrer">
          SOURCE
        </Button>
        <Button size="small" color="primary" href="https://myanimelist.net/animelist/erikanguyen"
                  target="_blank"
                  rel="noopener noreferrer">
          DEMO
        </Button>
                  </CardFooter>  
                  
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <CardBody>
                  <h4 className={classes.cardTitle}>Website for DJ Kid Nice</h4>
                  <Badge color="primary">javascript</Badge>
                  <Badge color="info">html5 / css3</Badge><Badge color="warning">bootstrap</Badge>
                  <p>A static business website made for a local DJ hosted on GoDaddy.</p>
                </CardBody>
                <CardFooter><Button size="small" color="secondary" href="https://myanimelist.net/animelist/erikanguyen"
                  target="_blank"
                  rel="noopener noreferrer">
          SOURCE
        </Button></CardFooter>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <CardBody>
                  <h4 className={classes.cardTitle}>Another Personal Website</h4>
                  <Badge color="primary">javascript</Badge>
                  <Badge color="info">html5 / css3</Badge>
                  <Badge color="warning">bootstrap</Badge>
                  <p>A personal resume/portfolio website made using <a href="https://startbootstrap.com/themes/resume/" alt="">Start Bootstrap</a></p>
                </CardBody>
                <CardFooter><Button size="small" color="secondary" href="https://myanimelist.net/animelist/erikanguyen"
                  target="_blank"
                  rel="noopener noreferrer">
          SOURCE
        </Button>
                </CardFooter>
                </Card>
            </GridItem>
          </GridContainer>
        </div>
        </Emojify>
    )
  }
}

export default withStyles(productStyle)(ProductSection)
