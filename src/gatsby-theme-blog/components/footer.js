/** @jsx jsx */

import { css, Styled, jsx } from "theme-ui"
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
        background: "#e0e0e0",
      }}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/work">Work</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/me">About</NavLink>
    </footer>
  )
}

export default Footer
