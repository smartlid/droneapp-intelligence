import { useState } from "react";
import styles from "./styles.module.scss";

export default function ExposureEvaporation() {
  const [evaporationActive, setEvaporationActive] = useState(true);
  const [buildActive, setBuildActive] = useState(false);
  const [deckingActive, setDeckingActive] = useState(false);
  const [image, setImage] = useState("evaporation.png");

  const onClickItem = (item) => {
    setEvaporationActive(item === "evaporation");
    setBuildActive(item === "build");
    setDeckingActive(item === "decking");

    switch (item) {
      case "evaporation":
        setImage("evaporation.png"); break;
      case "build":
        setImage("evaporation-build.png"); break;
      case "decking":
        setImage("evaporation.png"); break;
      default: break;
    }
  }
  
  return (
    <div className={`${styles.slide} ${styles.dark}`}>
      <img
        src="/assets/remote-roofing-logo-white.png"
        alt="logo"
        className={`${styles.logo} fade-in-top-down`}
      />

      <div className={styles.content} style={{ textAlign: "right" }}>
        <h1
          className="fade-in-top-down"
          style={{ fontSize: "70px", fontStyle: "bolder", margin: "0 0 10px" }}
        >
          Moisture Exposure
        </h1>
        <p className="fade-in-top-down">
          The thermal composition and condition of your roof
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "space-between",
            alignItems: "center",
            height: "80%",
          }}
        >
          <div style={{ flex: "0 0 50%" }}>
            <img src={`/assets/${image}`} width="100%" />
          </div>
          <div
            style={{
              flex: "0 0 50%",
              padding: "0 50px",
            }}
          >
            <div>
              <div className={`${styles.exposure__title} ${evaporationActive ? styles.active : ""}`} onClick={() => onClickItem("evaporation")}>
                Evaporation
              </div>
              <div className={`${styles.exposure__title} ${buildActive ? styles.active : ""}`} onClick={() => onClickItem("build")}>Build up</div>
              <div className={`${styles.exposure__title} ${deckingActive ? styles.active : ""} ${styles.last}`} onClick={() => onClickItem("decking")}>
                Decking
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
