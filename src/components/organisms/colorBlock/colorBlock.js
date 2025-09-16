import React from "react";
import * as styles from "./colorBlock.module.css";

// 色を表示するorganisms（BasePageを参考に作成）
const ColorBlock = ({ 
  backgroundColor = "#f0f0f0", 
  height = "400px",
  width = "100%",
  useGrid = false,
  gridTemplateColumns = "1fr",
  gridTemplateRows = "1fr",
  gridGap = "20px",
  children 
}) => {
  return (
    <div 
      className={styles.colorBlock}
      style={{ 
        backgroundColor,
        height,
        width
      }}
    >
      <div 
        className={styles.content}
        style={{
          display: useGrid ? 'grid' : 'flex',
          gridTemplateColumns: useGrid ? gridTemplateColumns : undefined,
          gridTemplateRows: useGrid ? gridTemplateRows : undefined,
          gap: useGrid ? gridGap : undefined,
          flexDirection: useGrid ? undefined : 'column',
          justifyContent: useGrid ? undefined : 'center',
          alignItems: useGrid ? undefined : 'center'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ColorBlock;
