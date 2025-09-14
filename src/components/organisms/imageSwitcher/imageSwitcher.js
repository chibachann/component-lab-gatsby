import React, { useState, useEffect } from "react";
import * as styles from "./imageSwitcher.module.css";

// 画像を交互に切り替えるorganisms
const ImageSwitcher = ({ images = [], interval = 3000, height = "400px" }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  if (!images.length) return null;

  return (
    <div className={styles.imageSwitcher} style={{ height }}>
      <img src={images[current]} alt="switching" className={styles.image} />
    </div>
  );
};

export default ImageSwitcher;
