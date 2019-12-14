import React from "react"
import Layout from "../gatsby-theme-blog/components/layout"
import { Styled, css } from "theme-ui"

import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

export default () => {
  const data = useStaticQuery(indexQuery)
  const {
    authorPhoto,
    site: {
      siteMetadata: { social, author },
    },
  } = data
  return (
    <Layout>
      <Styled.div>
        <Styled.p css={css({ textAlign: "center" })}>
          <Image
            fixed={authorPhoto.childImageSharp.fixed}
            alt={author}
            css={css({
              mr: 2,
              mb: 0,
              width: 48,
              minWidth: 48,
              borderRadius: 99999,
            })}
          />
          <Styled.p css={css({ fontSize: "52px", textAlign: "center" })}>
            Hi, I'm{" "}
            <strong css={css({ color: "primary" })}>Aleem Isiaka</strong>, a{" "}
            <span css={css({ textDecoration: "underline" })}>
              software developer
            </span>{" "}
            and <span css={css({ textDecoration: "underline" })}>blogger.</span>
          </Styled.p>

          <Styled.p css={css({ textAlign: "center" })}>
            <Styled.a
              as={Link}
              css={css({ textDecoration: "none", mb: 3, border: "2px solid darkslategrey", p: 2, borderRadius: "3px"})}
              to="/about"
            >
              Read More...
            </Styled.a>
          </Styled.p>

          <Styled.p css={css({ textAlign: "center" })}>

          Follow me:{" "}
            {social.map(details => (
              <a href={details.url} key={details.name}>
                {details.name}{" "}
            </a>
            ))}
          </Styled.p>
        </Styled.p>
      </Styled.div>
    </Layout>
  )
}

const indexQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        author
        social {
          name
          url
        }
      }
    }
    authorPhoto: file(absolutePath: { regex: "/author.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
