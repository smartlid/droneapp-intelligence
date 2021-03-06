import { useEffect } from "react";
import styles from "./styles.module.scss";

export default function Insurance({ setPaginationClass }) {
  useEffect(() => {
    setPaginationClass("dark");
  }, [setPaginationClass]);

  return (
    <div className={`${styles.slide} ${styles.dark}`}>
      <img
        src="/assets/remote-roofing-logo-white.png"
        alt="logo"
        className={`${styles.logo} fade-in-top-down`}
      />

      <div className={styles.content} style={{ marginRight: 0 }}>
        <div style={{ marginBottom: "75px", width: "50%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              opacity: 0,
              animationFillMode: "forwards",
              animationDelay: ".7s",
            }}
            className="fade-in-top-down"
          >
            <img
              src="/assets/rain-button.png"
              width={90}
              style={{ marginRight: "20px" }}
            />
            <h1 className={styles.title}>INSURANCE</h1>
          </div>
          <p
            style={{
              opacity: 0,
              animationFillMode: "forwards",
              animationDelay: ".9s",
            }}
            className={`${styles["sub-title"]} fade-in-top-down`}
          >
            Based on cause and extent of damage on the roof, your insurance
            carrier can cover the cost of replacement
          </p>
        </div>

        <img
          src="/assets/brands.png"
          style={{
            float: "left",
            marginRight: "100px",
            opacity: 0,
            animationFillMode: "forwards",
            animationDelay: "1.2s",
          }}
          className="fade-in-top-down"
        />
        <img
          src="/assets/roof-scheme-with-rain.png"
          style={{
            marginTop: "-100px",
            opacity: 0,
            animationFillMode: "forwards",
            animationDelay: "1.9s",
            width: "45%",
          }}
          className="fade-in-top-down"
        />
      </div>
    </div>
  );
}
