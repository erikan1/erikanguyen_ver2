import { cardTitle, defaultFont, container } from "assets/jss/material-kit-react.jsx"

const teamStyle = {
  ...container,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d",
    ...defaultFont
  },
  description: {
    color: "#999",
    ...defaultFont
  },
  justifyCenter: {
    justifyContent: "center !important",
  },
  margin5: {
    margin: "5px",
  },
}

export default teamStyle
