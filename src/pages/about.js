import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>This page is still under preparation...</p>
    </Layout>
  )
};

export const Head = () => <Seo title="About" />;
export default AboutPage;
