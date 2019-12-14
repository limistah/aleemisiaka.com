/** @jsx jsx */

import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Styled, css, jsx } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout location={location} title={siteTitle} socialLinks={socialLinks}>
    <main>
      {posts.map(({ node }) => {
        const title = node.title || node.slug
        const keywords = node.keywords || []
        return (
          <Fragment key={node.slug}>
            <SEO title="Home" keywords={keywords} />
            <div>
              <Styled.h2
                css={css({
                  mb: 1,
                })}
              >
                <Styled.a
                  as={Link}
                  css={css({
                    textDecoration: `none`,
                  })}
                  to={node.slug}
                >
                  {title}
                </Styled.a>
              </Styled.h2>
              <small sx={{ fontWeight: "bold" }}>{node.date}</small>

              <Styled.p>{node.excerpt}</Styled.p>
            </div>
          </Fragment>
        )
      })}
    </main>
  </Layout>
)

export default Posts
