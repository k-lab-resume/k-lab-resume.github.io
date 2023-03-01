import * as React from "react";
import { Link } from "gatsby";

const LandingPage = () => {
  return (
    <div className="landing">
      <section className="global-nav">
          <p><Link to="/">K-Lab</Link></p>
          <p><Link to="/policy/#contact">Contact</Link></p>
      </section>
      <section className="home">
        <p>Welcome to this site!</p>
      </section>
      <section className="global-nav">
        <p>© {new Date().getFullYear()}</p>
        <p><Link to="/policy">Terms&Privacy</Link></p>
      </section>
    </div>
  )
};

export default LandingPage;