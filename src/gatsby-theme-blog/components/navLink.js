/** @jsx jsx */

import React, { Fragment } from "react"
import { css, Styled, jsx } from "theme-ui"
import { Link } from "gatsby"

export default props => {
  return (
    <Link
      to={props.to}
      css={css({
        variant: "styles.a",
        boxSizing: "border-box",
        minWidth: "0px",
        display: "inline-block",
        fontWeight: 700,
        m: "0",
        textDecoration: "none",
        p: 2,
      })}
    >
      {props.children}
    </Link>
  )
}
