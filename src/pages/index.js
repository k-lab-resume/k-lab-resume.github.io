import * as React from "react";
import LandingPage from "../components/home";
import Seo from "../components/seo";

const HomePage = () => {
  return (
    <LandingPage />
  )
};

export default HomePage;
export const Head = () => <Seo title="home" />;
