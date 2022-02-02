import { useEffect } from "react";
import styles from "./styles.module.scss";
import "@google/model-viewer";

export default function ProductShingle({ setPaginationClass }) {
  useEffect(() => {
    setPaginationClass("light");
  }, [setPaginationClass]);

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
            src="/assets/drone.png"
            alt="drone"
            className={`${styles.product__drone} fade-in-top-down`}
          />
          <div style={{ flex: "0 0 35%", paddingTop: "10%" }}>
            <p className={`${styles.list} ${styles.active}`}>
              Shingle Analysis
            </p>
            <p className={`${styles.list}`}>Underlayment Analysis</p>
            <p className={`${styles.list} ${styles.last}`}>Decking Analysis</p>
          </div>
          <div style={{ flex: "0 0 65%" }}>
            {/* <img src="/assets/product1.png" /> */}
            <model-viewer
              src="/assets/models/roof-scheme.glb"
              poster="/assets/models/poster.png"
              alt="Roof"
              ar
              // loading='lazy'
              camera-controls
              camera-orbit="-578.6deg 86.78deg auto"
              auto-rotate
            >
              <button
                className="Hotspot"
                slot="hotspot-1"
                data-position="0.6388834847940408m 2.587730473859438m -4.858675086561681m"
                data-normal="-0.4308964476455713m 0.90240138043247m -1.3877787807814454e-17m"
                data-visibility-attribute="visible"
              >
                <div className="HotspotAnnotation">Shingles</div>
              </button>
              <button
                className="Hotspot"
                slot="hotspot-2"
                data-position="0.9450196153931945m 1.7477314953922551m -5.458971122385296m"
                data-normal="-0.43089666926380654m 0.9024012746097811m -1.3877787807814454e-17m"
                data-visibility-attribute="visible"
              >
                <div className="HotspotAnnotation">Felt</div>
              </button>
              <button
                className="Hotspot"
                slot="hotspot-5"
                data-position="0.27918332393458023m 0.8888505241907525m -7.583022577831132m"
                data-normal="-0.43089586455699563m 0.9024016588568968m 0m"
                data-visibility-attribute="visible"
              >
                <div className="HotspotAnnotation">Decking</div>
              </button>
              <div className="progress-bar hide" slot="progress-bar">
                <div className="update-bar"></div>
              </div>
              <button slot="ar-button" id="ar-button">
                View in your space
              </button>
            </model-viewer>
          </div>
        </div>
      </div>
      <div className={styles.product__right}>
        <>
          <h2 className={`${styles.product__title} fade-in-top-down`}>
            <span style={{ color: "#075BBD" }}>AI</span> Roof
            <br />
            Assessment
            <img
              src="/assets/remote-roofing-logo-short.png"
              alt="logo"
              className={`${styles["product__title-logo"]} fade-in-top-down`}
            />
          </h2>
          <div style={{ border: "2px solid #E5E5E5", width: "100%" }}></div>
          <h6 className={`${styles.product__description} fade-in-top-down`}>
            A complete analysis and breakdown of the health of your roof
          </h6>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p
              style={{
                color: "#075BBD",
                fontSize: "50px",
                fontWeight: "bold",
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
                padding: "16px 32px",
                fontStyle: "bold",
                fontSize: "14px",
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
