import * as React from "react";
import Layout from "../components/organisms/layout";
import BasePage from "../components/organisms/basepage/basepage";

const IndexPage = () => {
  return (
    <Layout>
      <BasePage />
    </Layout>
  );
};

export default IndexPage

export const Head = () => <title>Home Page</title>
