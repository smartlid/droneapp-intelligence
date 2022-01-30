import { useEffect } from "react";
import styles from "./styles.module.scss"

export default function Product({ setPaginationClass }) {
  useEffect(() => {
    setPaginationClass('light');
  }, [setPaginationClass])

  return (
    <div className={`${styles.slide} ${styles["slide-product"]} ${styles.product}`}>
      <div className={styles.product__left}>
        <img src="/assets/remote-roofing-logo.png" alt="logo" className={`${styles.product__logo} fade-in-top-down`} />
        <div className={styles["product__roof-scheme-area"]}>
          <img src="/assets/drone.png" alt="drone" className={`${styles.product__drone} fade-in-top-down`} />
          <div style={{ flex: "0 0 35%" }}>
            Steps Here
          </div>
          <div style={{ flex: "0 0 65%" }}>Roof Scheme 3D Model Here</div>
        </div>
      </div>
      <div className={styles.product__right}>
        <>
          <h2 className={`${styles.product__title} fade-in-top-down`}>
            <span style={{ color: '#075BBD' }}>AI</span> Roof<br />Assessment
            <img src="/assets/remote-roofing-logo-short.png" alt="logo" className={`${styles["product__title-logo"]} fade-in-top-down`} />
          </h2>
          <div style={{ border: "2px solid #E5E5E5", width: "100%" }}></div>
          <h6 className={`${styles.product__description} fade-in-top-down`}>A complete analysis and breakdown of the health of your roof</h6>
          <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ color: "#075BBD", fontSize: "50px", fontWeight: "bold", textDecorationLine: "line-through" }}>$279</p>
            <button style={{
              background: "linear-gradient(135.11deg, #0A8EDE 3.78%, #075BBD 94.58%)",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "15px",
              border: "none",
              color: "white",
              padding: "16px 32px",
              fontStyle: "bold",
              fontSize: "14px"
            }}>LAUNCH REPORT</button>
          </div>
        </>
      </div>
    </div>
  );
}