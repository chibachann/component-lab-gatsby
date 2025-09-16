import * as React from "react";
import Layout from "../components/organisms/layout";
import BasePage from "../components/organisms/basepage/basepage";
import ImageSwitcher from "../components/organisms/imageSwitcher/imageSwitcher";
import ImageSwitcherFade from "../components/organisms/imageSwitcherFade/imageSwitcherFade";
import ImageBackground from "../components/organisms/imageBackground/imageBackground";
import ColorBlock from "../components/organisms/colorBlock/colorBlock";
import TwoColumnBlock from "../components/organisms/twoColumnBlock/twoColumnBlock";

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
      <ImageBackground 
        image="/static/images/forest.jpg" 
        height="400px"
      >
        <h2 style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          背景画像の上にコンテンツ
        </h2>
        <p style={{ color: 'white', textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
          この領域には任意のコンテンツを配置できます
        </p>
      </ImageBackground>
      <ColorBlock backgroundColor="#ff6b6b" height="300px">
        <h2 style={{ color: 'white' }}>赤いブロック</h2>
        <p style={{ color: 'white' }}>背景色と高さをカスタマイズ可能</p>
      </ColorBlock>
      <ColorBlock backgroundColor="#4ecdc4" height="200px">
        <h3 style={{ color: 'white' }}>ターコイズブロック</h3>
      </ColorBlock>
      <ColorBlock>
        <h3>デフォルトカラー（#f0f0f0）</h3>
        <p>デフォルト高さ（400px）</p>
      </ColorBlock>
      <ColorBlock backgroundColor="#6c5ce7" height="350px">
        <TwoColumnBlock
          leftBackgroundColor="#ff6b6b"
          rightBackgroundColor="#4ecdc4"
          height="300px"
          leftContent={
            <div>
              <h3 style={{ color: 'white' }}>左側（60%）</h3>
              <p style={{ color: 'white' }}>赤いブロック</p>
            </div>
          }
          rightContent={
            <div>
              <h4 style={{ color: 'white' }}>右側（40%）</h4>
              <p style={{ color: 'white' }}>ターコイズブロック</p>
            </div>
          }
        />
      </ColorBlock>
    </Layout>
  );
};

export default IndexPage

export const Head = () => <title>Home Page</title>
