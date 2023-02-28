import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="error">
        <p>Sorry...</p>
        <p>404s have seemingly eaten the page...</p>
        <p>I am in the middle of searching for 404s to catch them.</p>
        <p>You can back to the home by clicking the top-left title.</p>
        <p>If you find them, please let me know immediately.</p>
      </div>
    </Layout>
  )
};

export const Head = () => <Seo title="404: Not Found" />;
export default NotFoundPage;
