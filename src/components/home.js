import * as React from "react"
import { Link } from "gatsby"

const LandingPage = () => {

  return (
    <div className="global-wrapper">
      <header className="global-header">
        <h1><Link to="/home">Gatsby Starter Blog</Link></h1>
      </header>
      <main>
        <p>LandingPage</p>
      </main>
      <footer>
        © {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default LandingPage