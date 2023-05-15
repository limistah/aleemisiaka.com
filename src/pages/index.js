import React from "react"
import Layout from "../gatsby-theme-blog/components/layout"
import { Styled, css } from "theme-ui"

import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

const Index = () => {
  const data = useStaticQuery(indexQuery)
  const {
    authorPhoto,
    titlePhoto,
    site: {
      siteMetadata: { social, author, description },
    },
  } = data
  return (
    <Layout
      seo={{ title: "Home", description: description }}
      authorPhoto={titlePhoto}
    >
      <Styled.div css={css({ textAlign: "center" })}>
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
        <Styled.p css={css({ fontSize: "30", textAlign: "center" })}>
          Hi, I'm{" "}
          <strong css={css({ color: "primary" })}>Aleem Isiaka (AI)</strong>
          <br />
          <span css={css({ textDecoration: "underline" })}>Engineer</span>
          {" && "}
          <span css={css({ textDecoration: "underline" })}>writer</span>
        </Styled.p>

        <Styled.p css={css({ textAlign: "center" })}>
          <Styled.a
            as={Link}
            css={css({
              textDecoration: "none",
              mb: 3,
              border: "2px solid darkslategrey",
              p: 2,
              borderRadius: "3px",
            })}
            to="/about"
          >
            Read More...
          </Styled.a>
        </Styled.p>

        <Styled.p css={css({ textAlign: "center" })}>
          Follow me:{" "}
          {social.map((details) => (
            <a href={details.url} key={details.name}>
              {details.name}{" "}
            </a>
          ))}
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
        title
        description
        social {
          name
          url
        }
      }
    }
    authorPhoto: file(absolutePath: { regex: "/author.png/" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    titlePhoto: file(absolutePath: { regex: "/author.png/" }) {
      childImageSharp {
        fixed(width: 40, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Index
