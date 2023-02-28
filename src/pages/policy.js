import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const PolicyPage = () => {
  return (
    <Layout>
      <h1>Policies</h1>
      <h2>Privacy Policy</h2>
      <h2>Terms</h2>
      <h2>Licence</h2>
    </Layout>
  )
};

export const Head = () => <Seo title="Terms & Privacy" />;
export default PolicyPage;
