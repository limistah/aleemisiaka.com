/** @jsx jsx */

import React, { Fragment } from "react"
import { css, Styled, jsx } from "theme-ui"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const Footer = ({}) => {
  const data = useStaticQuery(bioQuery)
  const {
    site: {
      siteMetadata: { author, social },
    },
  } = data
  console.log(social)
  return (
    <footer>
      <div
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          variant: "styles.footer",
        }}
      >
        <Link to="/" sx={{ variant: "styles.navlink", p: 2 }}>
          Home
        </Link>
        <Link to="/" sx={{ variant: "styles.navlink", p: 2 }}>
          Blog
        </Link>
        <Link to="/" sx={{ variant: "styles.navlink", p: 2 }}>
          About
        </Link>
      </div>

      <div
        css={css({
          my: 3,
          textAlign: "center",
        })}
      >
        © {author}
        {` `}&bull;{` `}
        {social.map((platform, i, arr) => (
          <Fragment key={platform.url}>
            <Styled.a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {platform.name}
            </Styled.a>
            {arr.length - 1 !== i && (
              <Fragment>
                {` `}&bull;{` `}
              </Fragment>
            )}
          </Fragment>
        ))}
      </div>
    </footer>
  )
}
const bioQuery = graphql`
  query AuthorQuery {
    site {
      siteMetadata {
        author
        social {
          name
          url
        }
      }
    }
  }
`

export default Footer
