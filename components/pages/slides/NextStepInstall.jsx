import styles from "./styles.module.scss";

export default function NextStepInstall() {
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
            marginTop: "2%",
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
            <p className={`${styles.list}`}>Analysis Confirmation</p>
            <p className={`${styles.list}`}>Finalized Estimate</p>
            <p className={`${styles.list} ${styles.last} ${styles.active}`}>
              Roof Installation
            </p>
            <p
              style={{ fontSize: "18px" }}
            >{`Remote Roofing’s experienced team completes the roof replacement and installation `}</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src="/assets/clock.png" style={{ marginRight: "10px" }} />
              <p style={{ fontSize: "20px" }}>24 HOURS</p>
            </div>
          </div>
          <div style={{ flex: "0 0 50%", margin: "-150px 0 0 100px" }}>
            <img src="/assets/illustration.png" style={{ height: "80%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
