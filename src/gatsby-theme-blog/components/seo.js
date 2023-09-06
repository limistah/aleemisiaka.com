/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import ogImg from "../../../content/assets/author.png"
import { useLocation } from "@gatsbyjs/reach-router"
let structuredData = {
  "@context": "http://schema.org",
  "@type": "Organization",
  name: "Aleem Isiaka",
  alternateName: "Software Engineer",
  url: "https://aleemisiaka.dev/",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos, Nigeria",
    postalCode: "234001",
    streetAddress: "Lagos",
    email: "aleemisiaka@gmail.com",
    faxNumber: "+234 812 025 4644",
  },
  sameAs: ["https://www.linkedin.com/in/limistah/"],
}
const LIMISTAH_DOMAIN = "https://aleemisiaka.dev"
function SEO({
  description,
  lang,
  meta,
  schemaMarkup = {},
  keywords,
  title,
  imgSrc,
  useTitleTemplate,
}) {
  // const location = useLocation()
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  let finalSchemaMarkup = Object.assign({}, structuredData, schemaMarkup)

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  let ogImageSrc = imgSrc ? imgSrc : ogImg

  if (!ogImageSrc.includes(LIMISTAH_DOMAIN)) {
    ogImageSrc = LIMISTAH_DOMAIN + ogImageSrc
  }

  if (finalSchemaMarkup.image) {
    finalSchemaMarkup.image[0] = finalSchemaMarkup.image[0] || ogImageSrc
  } else {
    finalSchemaMarkup.image = [ogImageSrc]
  }
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={site.siteMetadata?.title}
      titleTemplate={
        useTitleTemplate && defaultTitle ? `%s | ${defaultTitle}` : null
      }
      meta={[
        {
          property: `title`,
          content: title,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },

        {
          property: `og:site_name`,
          content: "Aleem Isiaka",
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: ogImageSrc,
        },
        // {
        //   property: `og:url`,
        //   content: LIMISTAH_DOMAIN + location.pathname,
        // },
        // {
        //   property: `twitter:site`,
        //   content: LIMISTAH_DOMAIN + location.pathname,
        // },
        {
          property: `twitter:image`,
          content: ogImageSrc,
        },
        {
          property: `twitter:card`,
          content: `summary`,
        },
        {
          property: `twitter:creator`,
          content: site.siteMetadata?.author || `Aleem Isiaka`,
        },
        {
          property: `twitter:title`,
          content: title,
        },
        {
          property: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    >
      {finalSchemaMarkup && (
        <script type="application/ld+json">
          {/* Remove falsy values, which is useful in the case of the blog pages not needing the address field of the schema thereby setting it to undefined */}
          {JSON.stringify(JSON.parse(JSON.stringify(finalSchemaMarkup)))}
        </script>
      )}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [
    "Software Engineer",
    "Backend Engineer",
    "DevOps Engineer",
    "Cloud Engineer",
    "Linux Admin",
  ],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
