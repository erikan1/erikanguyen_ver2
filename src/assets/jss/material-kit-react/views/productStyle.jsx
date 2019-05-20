import { defaultFont,container,title } from "assets/jss/material-kit-react.jsx"
import badgeStyle from "assets/jss/material-kit-react/components/badgeStyle.jsx"

const productStyle = {
  ...badgeStyle,
  title: {
    ...title,
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "left",
    ...defaultFont
  },
  ...defaultFont,
  ...container
}

export default productStyle
