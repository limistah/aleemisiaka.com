/** @jsx jsx */

import { jsx } from "theme-ui"
import NavLink from "./navLink"

const Footer = () => {
  return (
    <footer
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        variant: "styles.footer",
      }}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/work/">Work</NavLink>
      <NavLink to="/blog/">Blog</NavLink>
      <NavLink to="/about/">About</NavLink>
    </footer>
  )
}

export default Footer
