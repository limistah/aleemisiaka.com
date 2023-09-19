import React from "react"
import Layout from "../gatsby-theme-blog/components/layout"
import { Styled, css } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const { titlePhoto } = useStaticQuery(workQuery)

  return (
    <Layout authorPhoto={titlePhoto} seo={{
      url: "/work/",
      description: "Awesomeness by Aleem Isiaka",
      title: "Handi-Work"
    }}>
      <Styled.h2>Work/Projects</Styled.h2>
      <Styled.hr />
      <Styled.h3>
        <Styled.a href="https://datingkinky.com" target="_blank">
          Dating Kinky Applications
        </Styled.a>
      </Styled.h3>
      This is one of the challenging projects that I have ever worked on, it
      started from being just a frontend development task to me handling all
      aspects of the company's applications.
      <Styled.h4 css={css({ my: 1 })}>Tech Stack</Styled.h4>
      <Styled.strong>Frontend:</Styled.strong> React, Vue, Vanilla JS, ES6,
      JQuery, ffmpeg.js <br />
      <Styled.strong>Backend:</Styled.strong> NodeJS, Express, MongoDB, MySQL,
      Nginx, Linux, Redis,
      <br />
      <Styled.strong>Dev Process: </Styled.strong>CI/CD, TDD, Agile
      <Styled.hr css={css({ mt: 3 })} />
      <Styled.h3>
        <Styled.a
          href="https://limistah.github.io/react-video-trimmer/"
          target="_blank"
        >
          React Video Trimmer
        </Styled.a>
      </Styled.h3>
      Do you need to trim your videos on the fly, this cool library would get
      that done for you right in your browser, no magical requirements. It uses
      ffmpeg but in the browser context and under the hood using webworker,
      producing the output in an efficient and smooth experience.
      <Styled.h4 css={css({ my: 1 })}>Tech Stack</Styled.h4>
      React, ffmpeg.js, Web Worker
      <Styled.hr css={css({ mt: 3 })} />
      <Styled.h3>
        <Styled.a
          href="https://github.com/limistah/react-here-map"
          target="_blank"
        >
          React Here Map
        </Styled.a>
      </Styled.h3>
      A concise ReactJS library for{" "}
      <Styled.a href="https://www.here.com" target="_blank">
        Here Maps
      </Styled.a>
      <Styled.h4 css={css({ my: 1 })}>Tech Stack</Styled.h4>
      JavaScript
      <Styled.hr css={css({ mt: 3 })} />
      <Styled.h3>
        <Styled.a href="https://github.com/limistah/scsprj" target="_blank">
          School Counselling Project
        </Styled.a>
      </Styled.h3>
      A simple school counselling and guidance system for Nigerian student. It
      provides choice of course based on the student's O'level result, it also
      lists the courses available in the system that the student can offer and
      lists their requirements.
      <Styled.h4 css={css({ my: 1 })}>Tech Stack</Styled.h4>
      Frontend: HTML 5, CSS 3, Bootstrap, JQuery <br />
      Backend: PHP/MySQL
      <Styled.hr css={css({ mt: 3 })} />
      <Styled.h3>
        <Styled.a
          href="https://limistah.github.io/ffmpeg-webworker/"
          target="_blank"
        >
          FFMPEG Web Worker
        </Styled.a>
      </Styled.h3>
      This library eases the utilization of FFMPEG - a media manipulation
      library usually from the terminal, in the browser. It relies on the work
      of guys at{" "}
      <Styled.a target="_blank" href="https://github.com/muaz-khan/Ffmpeg.js/">
        ffmpeg.js
      </Styled.a>
      {", "}
      <Styled.a
        target="_blank"
        href="https://github.com/bgrins/videoconverter.js"
      >
        videoconverter.js
      </Styled.a>
      {", and "}
      <Styled.a
        target="_blank"
        href="https://www.npmjs.com/package/webworker-file"
      >
        Web Worker File
      </Styled.a>
      <Styled.h4 css={css({ my: 1 })}>Tech Stack</Styled.h4>
      JavaScript
      <Styled.hr css={css({ mt: 3 })} />
      <Styled.h3>
        <Styled.a
          href="https://www.npmjs.com/package/webworker-file"
          target="_blank"
        >
          Web Worker File
        </Styled.a>
      </Styled.h3>
      This is a utility library, that converts a JavaScript file to a webworker
      executable file.
      <Styled.h4 css={css({ my: 1 })}>Tech Stack</Styled.h4>
      JavaScript
      <Styled.hr css={css({ mt: 3 })} />
      <Styled.h3>
        <Styled.a
          href="https://github.com/limistah/redux-api-middleware-broker"
          target="_blank"
        >
          Redux API Middleware Broker
        </Styled.a>
      </Styled.h3>
      This utility library ensures that communication between redux action
      creators for{" "}
      <Styled.a
        target="_blank"
        href="https://www.npmjs.com/package/redux-api-middleware"
      >
        redux api middleware
      </Styled.a>{" "}
      are consistent and correct, everytime.
      <Styled.h4 css={css({ my: 1 })}>Tech Stack</Styled.h4>
      JavaScript
      <Styled.hr css={css({ mt: 3 })} />
    </Layout>
  )
}

const workQuery = graphql`
  query WorkQuery {
    authorPhoto: file(absolutePath: { regex: "/author.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    titlePhoto: file(absolutePath: { regex: "/author.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        fixed(width: 40, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
