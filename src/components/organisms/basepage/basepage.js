import React from "react";
import * as styles from "./basepage.module.css";

// 今後拡張しやすいように、propsやstateの雛形を用意
const BasePage = (props) => {
  // ここにstateやロジックを追加可能
  return (
    <div className={styles.basePage}>
      {/* ここにコンテンツを追加していく */}
    </div>
  );
};

export default BasePage;
