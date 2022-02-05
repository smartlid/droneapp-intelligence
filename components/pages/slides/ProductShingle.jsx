import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import "@google/model-viewer";

export default function ProductShingle() {
  const [firstActive, setFirstActive] = useState(true);
  const [secondActive, setSecondActive] = useState(false);
  const [thirdActive, setThirdActive] = useState(false);
  const [roof, setRoof] = useState("roof-shingle.glb");

  const onClickItem = (item) => {
    setFirstActive(item === "first");
    setSecondActive(item === "second");
    setThirdActive(item === "third");

    switch (item) {
      case "first":
        setRoof("roof-shingle.glb");
        break;
      case "second":
        setRoof("roof-felt.glb");
        break;
      case "third":
        setRoof("roof-decking.glb");
        break;
      default:
        break;
    }
  };

  return (
    <div
      className={`${styles.slide} ${styles["slide-product"]} ${styles.product}`}
    >
      <div className={styles.product__left}>
        <img
          src="/assets/remote-roofing-logo.png"
          alt="logo"
          className={`${styles.product__logo} fade-in-top-down`}
        />
        <div className={styles["product__roof-scheme-area"]}>
          <img
            src="/assets/drone2.png"
            alt="drone"
            className={`${styles.product__drone} fade-in-top-down`}
          />
          <div style={{ flex: "0 0 40%", paddingTop: "10%" }}>
            <p
              className={`${styles.list} ${firstActive ? styles.active : ""}`}
              onClick={() => onClickItem("first")}
            >
              Shingle Analysis
            </p>
            <p
              className={`${styles.list} ${secondActive ? styles.active : ""}`}
              onClick={() => onClickItem("second")}
            >
              Underlayment Analysis
            </p>
            <p
              className={`${styles.list} ${thirdActive ? styles.active : ""} ${
                styles.last
              }`}
              onClick={() => onClickItem("third")}
            >
              Decking Analysis
            </p>
          </div>
          <div style={{ flex: "0 0 60%" }}>
            <model-viewer
              src={`/assets/models/${roof}`}
              poster="/assets/models/poster.png"
              alt="Roof"
              ar
              // loading='lazy'
              camera-controls
              camera-orbit="-578.6deg 86.78deg auto"
              auto-rotate
            ></model-viewer>
          </div>
        </div>
      </div>
      <div className={styles.product__right}>
        <>
          <h1 className={`${styles.product__title} fade-in-top-down`}>
            <span style={{ color: "#075BBD" }}>AI</span> Roof
            <br />
            Assessment
            <img
              src="/assets/remote-roofing-logo-short.png"
              alt="logo"
              className={`${styles["product__title-logo"]} fade-in-top-down`}
            />
          </h1>
          <div
            style={{
              border: "2px solid #E5E5E5",
              background: "#E5E5E5",
              width: "100%",
            }}
          ></div>
          <p className={`${styles.product__description} fade-in-top-down`}>
            A complete analysis and breakdown of the health of your roof
          </p>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "45px",
            }}
          >
            <p
              style={{
                color: "#075BBD",
                fontWeight: "bolder",
                fontSize: "60px",
                lineHeight: "78px",
                margin: 0,
                textDecorationLine: "line-through",
              }}
            >
              $279
            </p>
            <button
              style={{
                background:
                  "linear-gradient(135.11deg, #0A8EDE 3.78%, #075BBD 94.58%)",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "15px",
                border: "none",
                color: "white",
                padding: "24px 54px",
                fontStyle: "bold",
                fontSize: "18px",
                lineHeight: "24px",
              }}
            >
              LAUNCH REPORT
            </button>
          </div>
        </>
      </div>
    </div>
  );
}
