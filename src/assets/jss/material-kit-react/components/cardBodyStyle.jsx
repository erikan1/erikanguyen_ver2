import { cardTitle, cardSubtitle, defaultFont } from "assets/jss/material-kit-react.jsx"

const cardBodyStyle = {
  cardBody: {
    padding: "0.9375rem",
    flex: "1 1 auto",
    textAlign: "justify",
    ...defaultFont
  },
  ...cardTitle,
  ...cardSubtitle,
}

export default cardBodyStyle
