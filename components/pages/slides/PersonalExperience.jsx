import styles from "./styles.module.scss";

export default function PersonalExperience() {
  return (
    <div
      className={`${styles.slide} ${styles["slide-about"]} ${styles.experience}`}
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
            width: "80%",
            paddingBottom: "30px",
            border: "solid #505050",
            borderWidth: "0 0 1px 0",
          }}
        >
          <h1
            className={styles.title}
            style={{
              color: "#075BBD",
            }}
          >
            Personalized
          </h1>
          <div style={{ display: "flex", alignItems: "end" }}>
            <h1 className={styles.title}>
              experience
            </h1>
            <h3
              style={{
                margin: "0 0 7px 15px",
                fontSize: "50px",
                fontWeight: "bold",
                color: "#505050",
              }}
            >
              (from start to finish)
            </h3>
          </div>
        </div>

        <div className={styles["experience__item-container"]}>
          <div className={styles.experience__item}>
            <img
              src="/assets/chat.png"
              className={styles["experience__item-icon"]}
            />
            <p className={styles["experience__item-text"]}>TEXT UPDATES</p>
          </div>
          <div className={styles.experience__item}>
            <img
              src="/assets/book.png"
              className={styles["experience__item-icon"]}
            />
            <p className={styles["experience__item-text"]}>
              REGULAR ROOF HEALTH CHECKS
            </p>
          </div>
          <div className={styles.experience__item}>
            <img
              src="/assets/roof-item.png"
              className={styles["experience__item-icon"]}
            />
            <p className={styles["experience__item-text"]}>CUSTOM ROOF</p>
          </div>
          <div className={styles.experience__item}>
            <img
              src="/assets/person.png"
              className={styles["experience__item-icon"]}
            />
            <p className={styles["experience__item-text"]}>
              DEDICATED ROOF GENIUS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
