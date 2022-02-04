import styles from "./styles.module.scss";

export default function About() {
  return (
    <div
      className={`${styles.slide} ${styles["slide-about"]} ${styles["bg-light"]}`}
    >
      <img
        src="/assets/remote-roofing-logo.png"
        alt="logo"
        className={`${styles.logo} fade-in-top-down`}
      />
      <img
        src="/assets/drone1.png"
        style={{ position: "absolute", left: "18%", top: "36%" }}
      />
      <img
        src="/assets/drone2.png"
        style={{ position: "absolute", right: "25%", top: "46%" }}
      />

      <div className={styles.content}>
        <div style={{ textAlign: "center", marginTop: "10%" }}>
          <h3
            className="fade-in-top-down"
            style={{
              fontWeight: "bolder",
              fontSize: "48px",
              lineHeight: "48px",
              margin: 0,
              opacity: 0,
              animationFillMode: "forwards",
              animationDelay: ".7s",
            }}
          >
            THE NEW ERA OF
          </h3>
          <h1
            className="fade-in-top-down"
            style={{
              fontStyle: "bolder",
              fontSize: "96px",
              color: "#075BBD",
              margin: 0,
              opacity: 0,
              animationFillMode: "forwards",
              animationDelay: "1s",
            }}
          >
            ROOFING
          </h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src="/assets/map.png" />
        </div>
      </div>
    </div>
  );
}
