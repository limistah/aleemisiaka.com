import React from "react"
import { Styled, css } from "theme-ui"

import PostFooter from "../components/post-footer"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => {
  let filename = post.slug.split("/")
  filename = filename[2]
  const tags = post.tags.join(",")
  return (
    <Layout location={location} title={title}>
      <SEO title={post.title} description={post.excerpt} />
      <main>
        <Styled.h1>{post.title}</Styled.h1>
        <Styled.p
          css={css({
            fontSize: 1,
            mt: -3,
            mb: 3,
          })}
        >
          {post.date}
        </Styled.p>

        <Styled.hr />
        <MDXRenderer>{post.body}</MDXRenderer>

        <Styled.a
          css={css({ my: 2, mr: 3 })}
          href={`https://github.com/limistah/aleemisiaka.com/blob/master/content/posts/${filename}.mdx`}
        >
          <svg
            css={css({ verticalAlign: "middle", mr: 1 })}
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
            height="1em"
            width="1em"
            viewBox="0 0 40 40"
          >
            <g>
              <path d="m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"></path>
            </g>
          </svg>
          Edit on github
        </Styled.a>
        <Styled.a
          href={`https://twitter.com/intent/tweet?hashtags=${tags}&original_referer=http://aleemisiaka.netlify.com&ref_src=twsrc%5Etfw&text=${filename}+https://aleemisiaka.netlify.com/${post.slug}&tw_p=tweetbutton&url=aleemisiaka.netlify.com`}
        >
          Tweet
        </Styled.a>
      </main>
      <PostFooter {...{ previous, next }} />
    </Layout>
  )
}

export default Post
