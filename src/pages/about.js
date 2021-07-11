import React from "react"
import Layout from "../gatsby-theme-blog/components/layout"
import { Styled, css } from "theme-ui"
import { Link, useStaticQuery, graphql } from "gatsby"

export default () => {
  const { titlePhoto } = useStaticQuery(aboutQuery)
  return (
    <Layout authorPhoto={titlePhoto}>
      <div
        css={css({
          display: "grid",
          gridGap: 2,
        })}
      >
        <div>
          <h2>About Me</h2>
          <hr />

          <h3>Basic Info</h3>
          <ul css={css({ listStyleType: "none" })}>
            <li>
              <strong>Name:</strong> Aleem Isiaka
            </li>
            <li>
              <strong>Country:</strong> Nigeria
            </li>
            <li>
              <strong>State:</strong> Lagos
            </li>
            <li>
              <strong>Profession:</strong> Software Developer
            </li>
            <li>
              <strong>Highest Education:</strong> HND (Mechanical Engineering)
            </li>
            <li>
              <strong>Links:</strong>{" "}
              <a href="https://facebook.com/limistah">Facebook</a>{" "}
              <a href="https://twitter.com/limistah">Twitter</a>{" "}
              <a href="https://github.com/limistah">Github</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Employment History</h3>
          <ul css={css({ listStyleType: "" })}>
            <li>
              <h4>Dating Kinky</h4>
              <div css={css({ px: 3 })}>
                <strong>Location:</strong> New York, US
                <br />
                <strong>Starting Position:</strong> Junior Frontend Web
                Developer
                <br />
                <strong>Current Position:</strong> Full Stack Web Developer
                <br />
                <strong>Start/End Date</strong> Dec. 2017 - Present
                <br />
                <strong>Experience Summary</strong>: I learnt all that I could
                say that I know about modern web development working with this
                Company. Using state of the art technologies and working with
                great minds helped me to gain a good insight about web
                development
              </div>
            </li>
            <li>
              <h4>Africoders Network</h4>
              <div css={css({ px: 3 })}>
                <strong>Location:</strong> Lagos, Nigeria
                <br />
                <strong>Starting Position:</strong> Web Developer Intern
                <br />
                <strong>Leaving Position:</strong> Junior Web Developer
                <br />
                <strong>Start/End Date</strong> Dec. 2016 - Dec. 2017
                <br />
                <strong>Experience Summary</strong>: This is my own genesis as
                far as web development and general programming is concerned. I
                was previlege to watch senior developers code and mentor me
                correcting my mistakes. My take home here was developing a web
                application for a state government. It broadens my knowledge and
                gave me the insight that I needed to move forward.
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h3>Achievements</h3>

          <Styled.ul>
            <Styled.li>
              <h4>This Space</h4>
              <div css={css({ px: 3 })}>
                <Styled.p>
                  I have always wanted to create a space where I could share my
                  little knowledge and expertise, and a place where other people
                  would come to find resources for themselves.
                </Styled.p>
                <Styled.p>
                  I tried WordPress which worked fine during the first few
                  months, but could not give me the level of comfort I needed,
                  so, I thought, it was time to move to Gatsby, and here we are.
                  Blazing fast, SEO Optimized, super easy customization what
                  more do I need?
                </Styled.p>
              </div>
            </Styled.li>

            <Styled.li>
              <h4>Learning Erlang</h4>
              <div css={css({ px: 3 })}>
                <Styled.p>
                  I do hear about the beauty of this language for concurrent
                  distributed systems. I don't have in mind to create one, but I
                  mind creating efficient chat systems, so I thought, why not
                  try it.
                </Styled.p>
                <Styled.p>
                  I went in barely Nov. 2019, and by two months in, I could read
                  and write Erlang languages efficiently.
                </Styled.p>
                <Styled.p>
                  To solidify my understanding of the language, I built an ICE
                  server for WebRTC audio and video calling. Check{" "}
                  <Link to="/work#iceServer">Erlang ICE Server</Link>
                </Styled.p>
                <Styled.p>It was fun!!!</Styled.p>
              </div>
            </Styled.li>

            <Styled.li>
              <h4>Joining Open Source</h4>
              <div css={css({ px: 3 })}>
                <Styled.p>
                  Nope, I have not contributed to all the repositories and
                  projecs you have in mind, but, check{" "}
                  <Link to="/work#iceServer">My Work</Link>'s page to see the
                  amount of libraries that I have available for free to the
                  world
                </Styled.p>
                <Styled.p>
                  These libraries give people satisfaction every day, and that
                  is where my joy comes from. I am mentioning this, in case you
                  care to ask, :smiles:
                </Styled.p>
              </div>
            </Styled.li>

            <Styled.li>
              <h4>Interning At Africoders Network</h4>
              <div css={css({ px: 3 })}>
                <Styled.p>
                  I love technology, and I would do whatever that it might
                  require to make me explore it.
                </Styled.p>
                <Styled.p>
                  One of my unforgettable days is the day that I first stepped
                  in Africoders Network and shooking Anthony Ogundipe, I felt
                  like my dreams came through, and it did.
                </Styled.p>
                <Styled.p>
                  This begins my journey to being a software developer. Like
                  Genesis is to Bible, Africoders Network is to my Developer's
                  Journey
                </Styled.p>
              </div>
            </Styled.li>
          </Styled.ul>
        </div>
        <div>
          <h3>Interests</h3>
          <Styled.p>
            I enjoy learning and trying out new things. I enjoy adventuring new
            areas and ideas.
          </Styled.p>
          <Styled.p>
            These seem natural to me, due to the fact that I spend most my time
            asking questions and few times seeking for the answers that I am yet
            to find.
          </Styled.p>
          <Styled.p>
            I enjoy science, I LOVE technology. I respect God, he takes a top
            priority, I give as much as I can and live everyday as I would live
            my last day on earth.
          </Styled.p>
        </div>
      </div>
    </Layout>
  )
}

const aboutQuery = graphql`
  query AboutQuery {
    titlePhoto: file(absolutePath: { regex: "/author.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        fixed(width: 40, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
