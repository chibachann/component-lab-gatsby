import React from "react";
import * as styles from "./colorBlock.module.css";

// 色を表示するorganisms（BasePageを参考に作成）
const ColorBlock = ({ 
  backgroundColor = "#f0f0f0", 
  height = "400px", 
  children 
}) => {
  return (
    <div 
      className={styles.colorBlock}
      style={{ 
        backgroundColor,
        height 
      }}
    >
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default ColorBlock;
