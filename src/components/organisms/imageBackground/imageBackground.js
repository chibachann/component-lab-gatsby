import React from "react";
import * as styles from "./imageBackground.module.css";

// 画像一枚を背景とするorganisms
const ImageBackground = ({ image, height = "400px", children }) => {
  if (!image) return null;

  return (
    <div 
      className={styles.imageBackground} 
      style={{ 
        height,
        backgroundImage: `url(${image})`
      }}
    >
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default ImageBackground;
