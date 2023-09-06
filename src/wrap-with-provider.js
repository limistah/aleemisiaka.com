import React, { createContext } from "react"

export const UserContext = createContext({ user: null, setUser: () => {} })
UserContext.displayName = "UserContext"

const Wrapper = ({ element }) => {
  return element
}

// eslint-disable-next-line react/display-name
export default ({ element }) => <Wrapper element={element} />
