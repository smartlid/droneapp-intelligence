import styles from "./styles.module.scss";

export default function Benefits() {
  return (
    <div
      className={`${styles.slide} ${styles["slide-about"]} ${styles.benefits}`}
    >
      <img
        src="/assets/remote-roofing-logo.png"
        alt="logo"
        className={`${styles.logo} fade-in-top-down`}
      />
      <img
        src="/assets/drone2.png"
        style={{ position: "absolute", right: "15%", top: "10%" }}
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
            border: "solid #505050",
            borderWidth: "0 0 1px 0",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "70px", fontStyle: "bolder" }}>
            Not Just <span style={{ color: "#505050" }}>Another</span>
          </h1>
          <h1 style={{ margin: 0, fontSize: "70px", fontStyle: "bolder" }}>
            Roofing Company
          </h1>
        </div>

        <div style={{ marginTop: "3%", position: "relative" }}>
          <div className={styles["benefits__left-circle"]}>
            <img
              src="/assets/remote-roofing-logo-short-white.png"
              style={{
                position: "absolute",
                top: "50%",
                right: "3%",
                width: "18%",
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "25%",
                transform: "translateY(-50%)",
              }}
            >
              <p className={styles.list}>Transparent</p>
              <p className={styles.list}>DFW-based</p>
              <p className={`${styles.list} ${styles.last}`}>A+Ratings</p>
            </div>
          </div>
          <div className={styles["benefits__right-circle"]}>
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: "25%",
                transform: "translateY(-50%)",
              }}
            >
              <p className={styles["list"]}>AI Powered</p>
              <p className={styles["list"]}>360° Analysis</p>
              <p className={`${styles["list"]} ${styles.last}`}>Custom Roof</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
