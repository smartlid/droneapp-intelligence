import styles from "./styles.module.scss";

export default function Testimonial() {
  return (
    <div
      className={`${styles.slide} ${styles["slide-about"]} ${styles.testimonial}`}
    >
      <img
        src="/assets/remote-roofing-logo.png"
        alt="logo"
        className={`${styles.logo} fade-in-top-down`}
      />
      <img
        src="/assets/drone1.png"
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
            position: "relative",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "70px",
              fontWeight: "bolder",
              color: "#075BBD",
            }}
          >
            Testimonials
          </h1>
          <div
            className={styles.testimonial__buttons}
            style={{
              position: "absolute",
              right: "-50px",
              transform: "translate(100%, -20%)",
            }}
          >
            <img
              src="/assets/google.png"
              className={styles["testimonial__button"]}
            />
            <img
              src="/assets/bbb.png"
              className={styles["testimonial__button"]}
            />
          </div>
        </div>

        <div className={styles["testimonial__item-container"]}>
          <div className={styles.testimonial__item}>
            <h4 className={styles.testimonial__name}>Steve favre</h4>
            <div className={styles.testimonial__rating}>
              <img src="/assets/star.png" />
              <img src="/assets/star.png" />
              <img src="/assets/star.png" />
              <img src="/assets/star.png" />
              <img src="/assets/star.png" />
            </div>
            <p>{`“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel porttitor augue. Cras eu scelerisque velit, a posuere sem. Ut rutrum maximus leo quis bibendum. Etiam sit amet lectus eu sapien egestas interdum.”`}</p>
            <div
              style={{ width: "80%", height: "40%", background: "#c4c4c4" }}
            ></div>
          </div>
          <div className={styles.testimonial__item}>
            <h4 className={styles.testimonial__name}>Steve favre</h4>
            <div className={styles.testimonial__rating}>
              <img src="/assets/star.png" />
              <img src="/assets/star.png" />
              <img src="/assets/star.png" />
              <img src="/assets/star.png" />
              <img src="/assets/star.png" />
            </div>
            <p>{`“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel porttitor augue. Cras eu scelerisque velit, a posuere sem. Ut rutrum maximus leo quis bibendum. Etiam sit amet lectus eu sapien egestas interdum.”`}</p>
            <div
              style={{ width: "80%", height: "40%", background: "#c4c4c4" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
