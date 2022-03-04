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
            <h4 className={styles.testimonial__name}>Grady Herman</h4>
            <div className={styles.testimonial__rating}>
              <img src="/assets/star.png" />
              <img src="/assets/star.png" />
              <img src="/assets/star.png" />
              <img src="/assets/star.png" />
              <img src="/assets/star.png" />
            </div>
            <p>{`“We had an excellent experience working with the Remote Roofing team to have our roof and skylight replaced. They worked with our insurance adjuster to ensure our claim would cover all aspects of the roof and skylight replacement. Their consultant was great scheduling the job. The crew arrived on time and worked tirelessly until the job was completed. The project supervisor, John, came by several times during the day while the job was being completed and kept us advised of status. We had one small issue with the skylight and that was addressed and fixed promptly. The job site was left very clean. Remote Roofing Is a reputable company and we would not hesitate to recommend them.”`}</p>
            <div
              style={{ width: "80%", height: "200px", background: "#c4c4c4" }}
            ></div>
          </div>
          <div className={styles.testimonial__item}>
            <h4 className={styles.testimonial__name}>Bryant Barnett</h4>
            <div className={styles.testimonial__rating}>
              <img src="/assets/star.png" />
              <img src="/assets/star.png" />
              <img src="/assets/star.png" />
              <img src="/assets/star.png" />
              <img src="/assets/star.png" />
            </div>
            <p>{`“I couldn’t be happier with this company. They are so nice and professional. I had them put a roof and gutters on my rental. They did such a great job that I hired them to put a roof on the house I live in. The gutters are amazing! My neighbor asked if I would recommend them. I said yes and they roofed her house. She is happy too. I can’t recommend Remote Roofing enough. Hire them. You’ll be happy.”`}</p>
            <div
              style={{ width: "80%", height: "200px", background: "#c4c4c4" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
