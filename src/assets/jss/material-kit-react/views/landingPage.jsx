import { title, defaultFont } from "assets/jss/material-kit-react.jsx"

const landingPageStyle = {
  title: {
    ...title,
    display: "inline-block",
    color: "#FFFFFF",
    textDecoration: "none",
    fontSize: "80px",
    ...defaultFont,
  },
  subtitle: {
    fontSize: "20px",
    ...defaultFont,
    marginTop:"-50px",
    color: "#FFFFFF"
  }
}

export default landingPageStyle
