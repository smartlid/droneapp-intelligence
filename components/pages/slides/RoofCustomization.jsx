import { useEffect, useState } from "react";
import { Widget } from "@typeform/embed-react";
import styles from "./styles.module.scss";

export default function RoofCustomization() {
  const [roofElement, setRoofElement] = useState(null);
  const [variant, setVariant] = useState("");
  const [roof, setRoof] = useState("roof-shingle.glb");

  const setRoofModelVariant = () => {
    roofElement.variantName = variant;
    setRoof(variant + ".glb")
  };

  useEffect(() => {
    const roofElement = document.getElementById("roof-model");
    roofElement.addEventListener("load", () => {
      const names = roofElement.availableVariants;
      console.log("Variants: ", names);
    });

    setRoofElement(roofElement);
  }, []);

  return (
    <div className={`${styles.slide} ${styles.customize}`}>
      <img
        src="/assets/remote-roofing-logo.png"
        alt="logo"
        className={`${styles.logo} fade-in-top-down`}
      />
      <div className={styles["customize__bg-circle"]}></div>

      <div className={styles.content}>
        <h1 className={`${styles.customize__title} fade-in-top-down`}>
          Customize My Roof
        </h1>
        <h5 className={`${styles.customize__description} fade-in-top-down`}>
          Choose and customize your new beautiful roof
        </h5>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "300px",
          }}
        >
          <div style={{ flex: "0 0 50%" }}>
            <h3
              style={{
                fontSize: "48px",
                fontWeight: "bolder",
                lineHeight: "62.5px",
              }}
            >
              Shingle Color
            </h3>
            <h4
              style={{
                fontSize: "30px",
                fontWeight: "bolder",
                lineHeight: "39px",
                color: "#564942",
              }}
            >
              {variant.split("-").join(" ").toUpperCase()}
            </h4>

            <div
              style={{
                display: "flex",
                flexWrap: "nowrap",
                marginBottom: "50px",
              }}
            >
              <img
                src="/assets/hickory-red.jpeg"
                className={`${styles.customize__texture} ${variant === "hickory-red" ? styles["customize__texture--active"] : ""}`}
                onClick={() => setVariant("hickory-red")}
              />
              <img
                src="/assets/oyster-grey.jpeg"
                className={`${styles.customize__texture} ${variant === "oyster-grey" ? styles["customize__texture--active"] : ""}`}
                onClick={() => setVariant("oyster-grey")}
              />
              <img
                src="/assets/weathered-wood.jpeg"
                className={`${styles.customize__texture} ${variant === "weathered-wood" ? styles["customize__texture--active"] : ""}`}
                onClick={() => setVariant("weathered-wood")}
              />
              <img
                src="/assets/shake-wood.jpeg"
                className={`${styles.customize__texture} ${variant === "shake-wood" ? styles["customize__texture--active"] : ""}`}
                onClick={() => setVariant("shake-wood")}
              />
              <img
                src="/assets/charcoal.jpeg"
                className={`${styles.customize__texture} ${variant === "charcoal" ? styles["customize__texture--active"] : ""}`}
                onClick={() => setVariant("charcoal")}
              />
            </div>

            <button
              className={styles.customize__button}
              onClick={() => setRoofModelVariant()}
            >
              CHOOSE STYLE
            </button>
          </div>
          <div style={{ flex: "0 0 50%" }}>
            <model-viewer
              id="roof-model"
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

        <Widget
          id="pLY2O0nd"
          iframeProps={{ title: "Insurance Intake Form" }}
          style={{
            width: "100%",
            height: "500px",
            marginTop: "250px",
            border: "none",
          }}
        />
      </div>
    </div>
  );
}
