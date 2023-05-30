import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Shadow me to add your own bio content
 */

export default ({ author, authorBio }) => (
  <Fragment>
    With{" "}
    <span role="img" aria-labelledby="img">
      💗
    </span>{" "}
    by <Styled.a href="https://aleemisiaka.dev/about">{author}</Styled.a>
    .
    <br />
    {authorBio}
  </Fragment>
)
