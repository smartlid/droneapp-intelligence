import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function RoofIntelligence({ record, setPaginationClass }) {
  const [map, setMap] = useState("");

  useEffect(() => {
    setPaginationClass("light");
  }, [setPaginationClass]);

  useEffect(() => {
    if (record) {
      setMap(record.fields["3D-Model"][0]["url"]);
    }
  }, [record]);

  return (
    <div className={`${styles.slide} ${styles["slide-roof"]} ${styles.roof}`}>
      <img
        src="/assets/remote-roofing-logo-white.png"
        alt="logo"
        className={`${styles.logo} fade-in-top-down`}
      />

      <div className={styles.content}>
        <h1
          style={{
            opacity: 0,
            animationFillMode: "forwards",
            animationDelay: ".7s",
          }}
          className={`${styles.title} fade-in-top-down`}
        >
          Roof Intelligence
        </h1>
        <p
          style={{
            opacity: 0,
            animationFillMode: "forwards",
            animationDelay: "1s",
          }}
          className={`${styles["sub-title"]} fade-in-top-down`}
        >
          {`A complete breakdown of your roof’s health`}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <img src="/assets/map-model.png" width="60%" /> */}
          <model-viewer
            src={map}
            alt="3D model of map"
            ar
            // loading='lazy'
            camera-controls
            autoplay
          ></model-viewer>
        </div>
      </div>
    </div>
  );
}
