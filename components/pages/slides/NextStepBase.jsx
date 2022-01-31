import styles from "./styles.module.scss";

export default function NextStepBase() {
  return (
    <div className={`${styles.slide} ${styles["slide-about"]} ${styles.steps}`}>
      <img
        src="/assets/remote-roofing-logo.png"
        alt="logo"
        className={`${styles.logo} fade-in-top-down`}
      />

      <div className={styles.content}>
        <div
          className="fade-in-top-down"
          style={{
            opacity: 0,
            animationFillMode: "forwards",
            animationDelay: "1s",
            width: "60%",
            paddingTop: "20px",
            borderWidth: "0 0 1px 0",
            position: "relative",
          }}
        >
          <h1
            style={{
              margin: "0 0 20px 0",
              fontSize: "70px",
              fontWeight: "bolder",
              color: "#075BBD",
            }}
          >
            Next Steps
          </h1>
          <p style={{ color: "#858585", margin: 0 }}>
            An overview of the next steps based on your roof analysis{" "}
          </p>
        </div>

        <div
          style={{
            marginTop: "5%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              flex: "0 0 50%",
              padding: "0 0 0 5%",
              color: "#868686",
              fontWeight: "bolder",
            }}
          >
            <p className={styles.list}>Analysis Confirmation</p>
            <p className={styles.list}>Finalized Estimate</p>
            <p className={`${styles.list} ${styles.last}`}>Roof Installation</p>
          </div>
          <div style={{ flex: "0 0 50%", marginTop: "-50px" }}>
            <img src="/assets/map-model.png" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
