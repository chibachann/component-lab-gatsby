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
        
      </ColorBlock>
      
      {/* 横幅とグリッド機能のテスト */}
      <ColorBlock 
        backgroundColor="#fd79a8" 
        height="300px"
        width="80%"
      >
        <h3 style={{ color: 'white' }}>幅80%のブロック</h3>
        <p style={{ color: 'white' }}>横幅を調整できます</p>
      </ColorBlock>
      
      <ColorBlock 
        backgroundColor="#fdcb6e" 
        height="400px"
        useGrid={true}
        gridTemplateColumns="1fr 1fr 1fr"
        gridTemplateRows="1fr 1fr"
        gridGap="15px"
      >
        <div style={{ backgroundColor: 'rgba(255,255,255,0.8)', padding: '20px', borderRadius: '8px' }}>
          <h4>Grid Item 1</h4>
        </div>
        <div style={{ backgroundColor: 'rgba(255,255,255,0.8)', padding: '20px', borderRadius: '8px' }}>
          <h4>Grid Item 2</h4>
        </div>
        <div style={{ backgroundColor: 'rgba(255,255,255,0.8)', padding: '20px', borderRadius: '8px' }}>
          <h4>Grid Item 3</h4>
        </div>
        <div style={{ backgroundColor: 'rgba(255,255,255,0.8)', padding: '20px', borderRadius: '8px' }}>
          <h4>Grid Item 4</h4>
        </div>
        <div style={{ backgroundColor: 'rgba(255,255,255,0.8)', padding: '20px', borderRadius: '8px' }}>
          <h4>Grid Item 5</h4>
        </div>
        <div style={{ backgroundColor: 'rgba(255,255,255,0.8)', padding: '20px', borderRadius: '8px' }}>
          <h4>Grid Item 6</h4>
        </div>
      </ColorBlock>
      
      <ColorBlock 
        backgroundColor="#a29bfe" 
        height="250px"
        width="60%"
        useGrid={true}
        gridTemplateColumns="2fr 1fr"
        gridGap="25px"
      >
        <div style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '25px', borderRadius: '10px' }}>
          <h3>メインコンテンツ（2fr）</h3>
          <p>この領域は隣の領域の2倍の幅を持ちます</p>
        </div>
        <div style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '25px', borderRadius: '10px' }}>
          <h4>サイド（1fr）</h4>
          <p>サイドバー領域</p>
        </div>
      </ColorBlock>
      
      {/* 左6割・右4割、左側を縦に1:3:6で分割 */}
      <ColorBlock 
        backgroundColor="#00b894" 
        height="600px"
        useGrid={true}
        gridTemplateColumns="6fr 4fr"
        gridGap="20px"
      >
        {/* 左側：縦に1:3:6で分割 */}
        <ColorBlock 
          backgroundColor="#55a3ff"
          useGrid={true}
          gridTemplateRows="1fr 3fr 6fr"
          gridGap="15px"
          height="100%"
        >
          <div style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '15px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h4>上部エリア（1fr）</h4>
          </div>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '20px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <h4>中央エリア（3fr）</h4>
            <p>3倍の高さを持つ領域</p>
          </div>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '25px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <h3>下部エリア（6fr）</h3>
            <p>6倍の高さを持つメイン領域</p>
            <p>最も大きなコンテンツ領域として使用できます</p>
            <ul style={{ marginTop: '15px' }}>
              <li>詳細情報</li>
              <li>メインコンテンツ</li>
              <li>その他の要素</li>
            </ul>
          </div>
        </ColorBlock>
        
        {/* 右側：4割の領域 */}
        <div style={{ backgroundColor: 'rgba(255,255,255,0.9)', padding: '30px', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h3>右側エリア（4fr）</h3>
          <p>全体の4割を占める領域</p>
          <div style={{ marginTop: '20px', width: '100%' }}>
            <div style={{ backgroundColor: '#ddd', padding: '15px', marginBottom: '15px', borderRadius: '5px' }}>
              <h5>サイドコンテンツ1</h5>
            </div>
            <div style={{ backgroundColor: '#ddd', padding: '15px', marginBottom: '15px', borderRadius: '5px' }}>
              <h5>サイドコンテンツ2</h5>
            </div>
            <div style={{ backgroundColor: '#ddd', padding: '15px', borderRadius: '5px' }}>
              <h5>サイドコンテンツ3</h5>
            </div>
          </div>
        </div>
      </ColorBlock>
      
    </Layout>
  );
};

export default IndexPage

export const Head = () => <title>Home Page</title>
