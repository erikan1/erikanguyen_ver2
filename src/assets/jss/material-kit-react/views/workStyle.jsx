import { title, defaultFont,container} from "assets/jss/material-kit-react.jsx"

const workStyle = {
  title: {
    ...title,
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "left",
    ...defaultFont
  },
  ...container
}

export default workStyle
