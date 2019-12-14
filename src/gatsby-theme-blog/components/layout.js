import React from "react"
import { css, Styled } from "theme-ui"
import Header from "./header"
import Footer from "./footer"

export default ({ children, ...props }) => (
  <Styled.root>
    <Header {...props} />
    <Styled.hr css={css({ m: 0 })} />

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
    <Styled.hr css={css({ m: 0 })} />
    <Footer />
  </Styled.root>
)
