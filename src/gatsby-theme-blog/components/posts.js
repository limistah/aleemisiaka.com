/** @jsx jsx */
import { Fragment } from "react"
import { Link } from "gatsby"
import { Styled, css, jsx } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <Layout
    seo={{
      title: "Blog",
      description: "The tricks of programming and software engineering trade",
    }}
    location={location}
    title={siteTitle}
    socialLinks={socialLinks}
  >
    <main>
      {posts.map(({ node }) => {
        const title = node.title || node.slug
        const keywords = node.keywords || []
        return (
          <Fragment key={node.slug}>
            <div
              css={css({
                border: "1px solid slategray",
                p: 2,
                mb: 2,
                borderRadius: "7px",
              })}
            >
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
                  to={`${node.slug}/`}
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
