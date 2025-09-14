import React, { useState, useEffect } from "react";
import * as styles from "./imageSwitcherFade.module.css";

const ImageSwitcherFade = ({ images = [], interval = 3000, height = "400px" }) => {
  const [oddImageIndex, setOddImageIndex] = useState(0);
  const [evenImageIndex, setEvenImageIndex] = useState(1);
  const [isOddVisible, setIsOddVisible] = useState(true);
  const [isEvenVisible, setIsEvenVisible] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      if (isOddVisible) {
        // 奇数が表示中 → 偶数をフェードイン、奇数をフェードアウト
        setIsEvenVisible(true);
        setIsOddVisible(false);
        
        setTimeout(() => {
          // フェード完了後、奇数の画像を次の次に更新
          setOddImageIndex((prev) => (prev + 2) % images.length);
        }, 500);
      } else {
        // 偶数が表示中 → 奇数をフェードイン、偶数をフェードアウト
        setIsOddVisible(true);
        setIsEvenVisible(false);
        
        setTimeout(() => {
          // フェード完了後、偶数の画像を次の次に更新
          setEvenImageIndex((prev) => (prev + 2) % images.length);
        }, 500);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, [images, interval, isOddVisible]);

  if (!images.length) return null;

  return (
    <div className={styles.imageSwitcherFade} style={{ height }}>
      {/* 奇数画像 */}
      <img 
        src={images[oddImageIndex]} 
        alt="odd" 
        className={`${styles.image} ${styles.oddImage} ${isOddVisible ? styles.fadeIn : styles.fadeOut}`}
      />
      
      {/* 偶数画像 */}
      <img 
        src={images[evenImageIndex]} 
        alt="even" 
        className={`${styles.image} ${styles.evenImage} ${isEvenVisible ? styles.fadeIn : styles.fadeOut}`}
      />
    </div>
  );
};

export default ImageSwitcherFade;
