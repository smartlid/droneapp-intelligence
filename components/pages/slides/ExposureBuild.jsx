import styles from "./styles.module.scss";

export default function ExposureEvaporation({ record, setPaginationClass }) {
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
            <img src="/assets/evaporation-build.png" width="100%" />
          </div>
          <div
            style={{
              flex: "0 0 50%",
              padding: "0 50px",
            }}
          >
            <div>
              <div className={`${styles.exposure__title}`}>Evaporation</div>
              <div className={`${styles.exposure__title} ${styles.active}`}>
                Build up
              </div>
              <div className={`${styles.exposure__title} ${styles.last}`}>
                Decking
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
