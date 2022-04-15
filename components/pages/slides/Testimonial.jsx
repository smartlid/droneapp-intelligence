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
            paddingBottom: "20px",
            border: "solid #505050",
            borderWidth: "0 0 1px 0",
            position: "relative",
          }}
        >
          <h1
            className={styles.title}
            style={{
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
              transform: "translate(100%, -25%)",
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
            <h4 className={styles.testimonial__name}>Trinidad Contreras</h4>
            <div className={styles.testimonial__rating}>
              <img src="/assets/star.png" />
              <img src="/assets/star.png" />
              <img src="/assets/star.png" />
              <img src="/assets/star.png" />
              <img src="/assets/star.png" />
            </div>
            <p>{`“Very Pleased With Bearded Brothers Roofing. Austin Helped us Fight Insurance Company after they denied our claim.. We got a brand new roof and Austin Picked a very nice color Shingle for us we love it. the crew was very professional”`}</p>
            <img
              src="/assets/review-trinidad-contreras.jpeg"
              className={styles.testimonial__image}
            />
          </div>
          <div className={styles.testimonial__item}>
            <h4 className={styles.testimonial__name}>Kunal Patel</h4>
            <div className={styles.testimonial__rating}>
              <img src="/assets/star.png" />
              <img src="/assets/star.png" />
              <img src="/assets/star.png" />
              <img src="/assets/star.png" />
              <img src="/assets/star.png" />
            </div>
            <p>{`“Andrea stayed in touch from start to finish and the workmanship exceeded my expectations. Great new looking roof and I am very happy to already got couple of compliments from the neighbors. Would definitely recommend Bearded Brothers.”`}</p>
            <img
              src="/assets/review-kuna-patel.png"
              className={styles.testimonial__image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
