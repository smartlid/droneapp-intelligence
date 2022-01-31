import { useEffect } from "react";
import styles from "./styles.module.scss";

export default function Storm({ setPaginationClass }) {
  useEffect(() => {
    setPaginationClass("dark");
  }, [setPaginationClass]);

  return (
    <div className={`${styles.slide} ${styles["slide-storm"]} ${styles.storm}`}>
      <img
        src="/assets/remote-roofing-logo-white.png"
        alt="logo"
        className={`${styles.storm__logo} fade-in-top-down`}
      />
      <div className={styles.storm__content}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginRight: "20px",
          }}
        >
          <img
            src="/assets/map-button.png"
            alt="map-image"
            width="70"
            height="70"
            className="fade-in-top-down"
            style={{ animationDelay: ".5s" }}
          />
          <div style={{ flex: "1 0" }}>
            <div
              style={{
                border: "0.5px dashed #E5E5E5",
                animationDelay: ".7s",
                width: 0,
                height: 0,
              }}
              className="scale-h-up"
            ></div>
          </div>
        </div>
        <div style={{ flex: "1 0" }}>
          <h1 className={`${styles.storm__title} fade-in-top-down`}>
            DFW STORMS
          </h1>
          <p className={`${styles.storm__description} fade-in-top-down`}>
            The DFW metroplex receives some of the strongest winds in nation.
          </p>

          <div className={`${styles["storm__map-area"]} fade-in-top-down`}>
            <div
              style={{ margin: "0 auto", position: "relative", width: "70%" }}
            >
              <img src="/assets/map.png" alt="map" />
              <div
                style={{
                  width: "100px",
                  position: "absolute",
                  right: "15%",
                  top: "25%",
                  transform: "rotate(-35deg)",
                }}
              >
                <div
                  style={{
                    width: 0,
                    border: "0.5px dashed #E5E5E5",
                    animationDuration: ".5s",
                    animationDelay: "1.5s",
                  }}
                  className="scale-w-up"
                ></div>
              </div>
              <p
                style={{
                  fontSize: "30px",
                  fontStyle: "bolder",
                  position: "absolute",
                  top: "8%",
                  right: 0,
                  animationDelay: "1.8s",
                }}
                className="fade-in-top-down"
              >
                60+ MPH
              </p>
            </div>
            <img
              src="/assets/wind.png"
              alt="wind"
              style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
              src="/assets/wind.png"
              alt="wind"
              style={{
                position: "absolute",
                bottom: 0,
                right: "20%",
                transform: "rotate(5deg)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
