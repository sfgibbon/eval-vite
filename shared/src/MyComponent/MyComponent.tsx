import React from "react";
import styles from "./MyComponent.module.css";
import image from "./some-pic.jpg";

export const MyComponent = () => {
  return (
    <div className={styles.main}>
      <div className="">MyComponent Here!</div>
      <img src={image} height="100" width="100" />
    </div>
  );
};
