import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Shadow me to add your own bio content
 */

export default ({ author, authorBio }) => (
  <Fragment>
    With 💗 by <Styled.a href="http://aleemisiaka.com/about">{author}</Styled.a>
    .
    <br />
    {authorBio}
  </Fragment>
)
