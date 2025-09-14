import * as React from "react";
import Layout from "../components/organisms/layout";
import BasePage from "../components/organisms/basepage/basepage";
import ImageSwitcher from "../components/organisms/imageSwitcher/imageSwitcher";
import ImageSwitcherFade from "../components/organisms/imageSwitcherFade/imageSwitcherFade";

const images = [
  "/static/images/forest.jpg",
  "/static/images/mountain.jpg",
  "/static/images/ocean.jpg",
];

const IndexPage = () => {
  return (
    <Layout>
      <BasePage />
      <ImageSwitcher images={images} interval={3000} height="500px" />
      <ImageSwitcherFade images={images} interval={3000} height="500px" />
    </Layout>
  );
};

export default IndexPage

export const Head = () => <title>Home Page</title>
