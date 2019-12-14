/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import { css, useColorMode, Styled, jsx } from "theme-ui"
import Switch from "./switch"
import Bio from "../components/bio"
import sun from "../../../content/assets/sun.png"
import moon from "../../../content/assets/moon.png"
const rootPath = `${__PATH_PREFIX__}/`

const NavLink = props => {
  return (
    <Link
      to={props.to}
      css={css({
        variant: "styles.a",
        boxSizing: "border-box",
        minWidth: "0px",
        display: "inline-block",
        fontWeight: 700,
        m: "0",
        textDecoration: "none",
        variant: "styles.navlink",
        p: 2,
      })}
    >
      {props.children}
    </Link>
  )
}

const iconCss = [
  css({
    pointerEvents: `none`,
  }),
  { margin: 4 }, // Explicitly leave margin out of theme-ui, this positioning should not change based on theme
]

const checkedIcon = (
  <img
    alt="moon indicating dark mode"
    src={moon}
    width="16"
    height="16"
    role="presentation"
    css={iconCss}
  />
)

const uncheckedIcon = (
  <img
    alt="sun indicating light mode"
    src={sun}
    width="16"
    height="16"
    role="presentation"
    css={iconCss}
  />
)

export default ({ children, title, ...props }) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === `dark`
  const toggleColorMode = e => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <header
    sx={{
      background: "#e0e0e0"
      }}
    >
      <div
      sx={{
        display: "grid",
        gridGap: 3,
        maxWidth: 768,
        mx: "auto",
        px: 3,
        py: 3,
        gridAutoFlow: "row",
        gridTemplateColumns: ["repeat(2, 1fr)", "repeat(3, 1fr)"],
        variant: "styles.header",
      }}>
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gridColumnStart: [1, 2],
          gridColumnEnd: [3, 3],
          order: [0, 1],
        }}
      >
        <Link to="/" title="Home">
          <img
            alt="UI Logo"
            src="https://contrast.now.sh/cff/40f?size=48&fontSize=2&baseline=2&fontWeight=900&radius=32&text=UI"
          />
          <span
            sx={{
              position: "absolute",
              width: 1,
              height: 1,
              overflow: "hidden",
              top: -9999,
            }}
          >
            Home
          </span>
        </Link>
      </div>
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <NavLink to="/blog">Blog</NavLink>

        <NavLink to="/work">Work</NavLink>
      </div>
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          order: 2,
        }}
      >
        <NavLink to="/about">About</NavLink>
        <Switch
          aria-label="Toggle dark mode"
          checkedIcon={checkedIcon}
          uncheckedIcon={uncheckedIcon}
          checked={isDark}
          onChange={toggleColorMode}
        />
      </div>
      </div>
    </header>
  )
}
