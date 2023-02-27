import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ children }) => {

  return (
    <div className="global-wrapper">
      <header className="global-header">
        <h1><Link to="/home">Gatsby Starter Blog</Link></h1>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout
