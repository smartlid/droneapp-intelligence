import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

export default function ExposureEvaporation({ record, setPaginationClass }) {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      mousewheel={true}
      speed={1000}
      spaceBetween={0}
      nested={true}
    >
      <SwiperSlide>
        <div className={`${styles.slide} ${styles.dark}`}>
          <img
            src="/assets/remote-roofing-logo-white.png"
            alt="logo"
            className={`${styles.logo} fade-in-top-down`}
          />

          <div className={styles.content} style={{ textAlign: "right" }}>
            <h1 className="fade-in-top-down" style={{ fontSize: "70px", fontStyle: "bolder", margin: "0 0 10px" }}>
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
                <img src="/assets/evaporation.png" width="100%" />
              </div>
              <div
                style={{
                  flex: "0 0 50%",
                  padding: "0 50px",
                }}
              >
                <div>
                  <div className={`${styles.exposure__title}`}>
                    Evaporation
                  </div>
                  <div className={`${styles.exposure__title}`}>Build up</div>
                  <div className={`${styles.exposure__title} ${styles.last} ${styles.active}`}>
                    Decking
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className={styles.dark}
          style={{ width: "100%", height: "100%", position: "relative" }}
        >
          <div className={styles.content} style={{ display: "flex" }}>
            <div style={{ flex: "0 0 50%", paddingRight: "5%" }}>
              <h1 className="fade-in-top-down" style={{ fontSize: "70px", fontStyle: "bolder", margin: "0 0 10px" }}>
                Thermal Scan
              </h1>
              <p className="fade-in-top-down">
                A thermal depth-vision scan of the roof to detect risks for moisture exposure.
              </p>
              <img src="/assets/scan-level.png" style={{ marginTop: "150px" }} />
            </div>

              <div style={{ paddingLeft: "5%" }}>
                <img src="/assets/healthy-roof.png" width={450} style={{ borderRadius: "30px" }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "50px" }}>
                  <h3>HEALTHY ROOF</h3>
                  <h3>MY ROOF</h3>
                </div>
              </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
