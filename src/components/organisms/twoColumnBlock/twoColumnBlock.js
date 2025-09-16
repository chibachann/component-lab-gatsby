import React from "react";
import * as styles from "./twoColumnBlock.module.css";
import ColorBlock from "../colorBlock/colorBlock";

// 2つのColorBlockを横並びで表示するorganisms
const TwoColumnBlock = ({ 
  leftBackgroundColor = "#ffffff", 
  rightBackgroundColor = "#ffffff",
  leftContent,
  rightContent,
  height = "300px"
}) => {
  return (
    <div className={styles.twoColumnBlock}>
      <div className={styles.leftColumn}>
        <ColorBlock 
          backgroundColor={leftBackgroundColor} 
          height={height}
        >
          {leftContent}
        </ColorBlock>
      </div>
      <div className={styles.rightColumn}>
        <ColorBlock 
          backgroundColor={rightBackgroundColor} 
          height={height}
        >
          {rightContent}
        </ColorBlock>
      </div>
    </div>
  );
};

export default TwoColumnBlock;
