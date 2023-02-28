import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ title, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const defaultTitle = site.siteMetadata?.title
  return (
    <>
      <title>{defaultTitle} | {title}</title>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="robots" content="noindex,nofollow" />
      {children}
    </>
  )
};

export default Seo;