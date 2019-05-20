import React from "react"
import LandingPage from "./LandingPage"
import SkillsSection from "./SkillsSection.jsx"
import ProductSection from "./ProductSection.jsx"
import WorkSection from "./WorkSection.jsx"
import NavBar from "../components/NavBar/NavBar.jsx"
import bg from "../assets/img/landing-bg.jpg"
import ScrollableAnchor from 'react-scrollable-anchor'

import "typeface-roboto"
import "typeface-roboto-slab"

class Index extends React.Component {
  render() {
    return (
      <div style={{backgroundImage: `url(${bg})`}}>
          <NavBar/>
          <ScrollableAnchor id={'home'}>
          <LandingPage/>
          </ScrollableAnchor>
          <ScrollableAnchor id={'profile'}>
          <SkillsSection/>
          </ScrollableAnchor>
          <ScrollableAnchor id={'projects'}>
          <ProductSection/>
          </ScrollableAnchor>
          <ScrollableAnchor id={'travel'}>
          <WorkSection/>
          </ScrollableAnchor>
      </div>
    );
  }
}

export default Index;