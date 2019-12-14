import React from "react"
import { css, Styled } from "theme-ui"
import Header from "./header"

export default ({ children, ...props }) => (
  <Styled.root>
    <Header {...props} />
    <hr />

    <div>
      <div
        css={css({
          maxWidth: `container`,
          mx: `auto`,
          px: 2,
          py: 4,
        })}
      >
        {children}
      </div>
    </div>

    <hr />
    {/* <Footer socialLinks={socialLinks} /> */}
  </Styled.root>
)
