import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ children }) => {
  return (
    <>
      <div className="global-nav">
          <p><Link to="/">K-Lab</Link></p>
          <p>Contact</p>
      </div>
      <div className="global-wrapper">{children}</div>
      <div className="global-nav">
        <p>© {new Date().getFullYear()}</p>
        <p><Link to="/policy">Terms&Privacy</Link></p>
      </div>
    </>
  )
};

export default Layout;
