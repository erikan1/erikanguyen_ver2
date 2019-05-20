import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// react emoji one component
import Emojify from 'react-emojione';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

// style
import workStyle from "assets/jss/material-kit-react/views/workStyle.jsx";

class WorkSection extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.container} style={{minHeight:"100vh",
      display:"flex",
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'}}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={12}>
          <Emojify style={{height: 20, width: 20}}>
          <h3 className={classes.title}><span role="img" aria-label="plane">✈️</span> Furthest I've Been From Home: Saigon, Viet Nam (9,267 mi Miles from <span role="img" aria-label="home w garden">🏡</span>)
            <br/><span role="img" aria-label="globe">🌍</span> Continents I've Visited: North America, Asia, Africa, Europe
            <br/><span role="img" aria-label="flag">🚩</span> Flags I've Collected:
            <span role="img" aria-label="belgium">🇧🇪</span>
            <span role="img" aria-label="bahamas">🇧🇸</span>
            <span role="img" aria-label="costa rica">🇨🇷</span>
            <span role="img" aria-label="france">🇫🇷</span> 
            <span role="img" aria-label="hong kong">🇭🇰</span> 
            <span role="img" aria-label="italy">🇮🇹</span> 
            <span role="img" aria-label="monaco">🇲🇨</span> 
            <span role="img" aria-label="mexico">🇲🇽</span> 
            <span role="img" aria-label="netherlands">🇳🇱</span> 
            <span role="img" aria-label="tunisia">🇹🇳</span> 
            <span role="img" aria-label="usa">🇺🇸</span> 
            <span role="img" aria-label="vaticano">🇻🇦</span> 
            <span role="img" aria-label="vietnam">🇻🇳</span>
            <br/><span role="img" aria-label="thought">💭</span> Wishlist: Ireland, Turkey, Spain, Portugal, Croatia, Greece, Indonesia, Thailand, Morocco
            </h3>
            </Emojify>
            <iframe src="https://www.google.com/maps/d/embed?mid=1JcrzABoIWyuwg6ikvGkJeLyOTdie2hCv" width="100%" height="400" title="My World Map"></iframe>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(workStyle)(WorkSection)
