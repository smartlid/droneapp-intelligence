import { useEffect, useState } from "react";
import { Widget } from "@typeform/embed-react";
import styles from "./styles.module.scss";

export default function RoofCustomization() {
  const HICKORY_RED = "hickory-red";
  const CHARCOAL = "charcoal";
  const OYSTER_GREY = "oyster-grey";
  const WEATHERED_WOOD = "weathered-wood";
  const SHAKE_WOOD = "shake-wood";

  const [roofElement, setRoofElement] = useState(null);
  const [variant, setVariant] = useState(WEATHERED_WOOD);
  const [btnColor, setBtnColor] = useState("");
  const [roof, setRoof] = useState(`${WEATHERED_WOOD}.glb`);

  const setRoofModelVariant = (color) => {
    roofElement.variantName = variant;
    setVariant(color);
    setRoof(color + ".glb");
    setBtnColor("");
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
        <h1 className={`${styles.title} fade-in-top-down`} style={{ color: "#075bbd" }}>
          Customize My Roof
        </h1>
        <p className={`${styles["sub-title"]} fade-in-top-down`} style={{ fontWeight: "bold" }}>
          Choose and customize your new beautiful roof
        </p>

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
                className={`${styles.customize__texture} ${
                  variant === HICKORY_RED
                    ? styles["customize__texture--active"]
                    : ""
                }`}
                onClick={() => setRoofModelVariant(HICKORY_RED)}
              />
              <img
                src="/assets/oyster-grey.jpeg"
                className={`${styles.customize__texture} ${
                  variant === OYSTER_GREY
                    ? styles["customize__texture--active"]
                    : ""
                }`}
                onClick={() => setRoofModelVariant(OYSTER_GREY)}
              />
              <img
                src="/assets/weathered-wood.jpeg"
                className={`${styles.customize__texture} ${
                  variant === WEATHERED_WOOD
                    ? styles["customize__texture--active"]
                    : ""
                }`}
                onClick={() => setRoofModelVariant(WEATHERED_WOOD)}
              />
              <img
                src="/assets/shake-wood.jpeg"
                className={`${styles.customize__texture} ${
                  variant === SHAKE_WOOD
                    ? styles["customize__texture--active"]
                    : ""
                }`}
                onClick={() => setRoofModelVariant(SHAKE_WOOD)}
              />
              <img
                src="/assets/charcoal.jpeg"
                className={`${styles.customize__texture} ${
                  variant === CHARCOAL
                    ? styles["customize__texture--active"]
                    : ""
                }`}
                onClick={() => setRoofModelVariant(CHARCOAL)}
              />
            </div>

            <button
              className={`${styles.customize__button} ${
                btnColor === HICKORY_RED
                  ? styles["customize__button--hickory-red"]
                  : ""
              } ${
                btnColor === OYSTER_GREY
                  ? styles["customize__button--oyster-grey"]
                  : ""
              } ${
                btnColor === WEATHERED_WOOD
                  ? styles["customize__button--weathered-wood"]
                  : ""
              } ${
                btnColor === SHAKE_WOOD
                  ? styles["customize__button--shake-wood"]
                  : ""
              } ${
                btnColor === CHARCOAL
                  ? styles["customize__button--charcoal"]
                  : ""
              }`}
              onClick={() => setBtnColor(variant)}
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
