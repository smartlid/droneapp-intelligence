import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

export default function Hail({ record }) {
  const [hailImpacts, setHailImpacts] = useState([]);

  useEffect(() => {
    if (record) {
      const impacts = [record.fields["HI-1"][0].url, record.fields["HI-3"][0].url, record.fields["HI-3"][0].url];
      setHailImpacts(impacts);
      console.log('Impacts: ', impacts)
    }
  }, [record]);

  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      mousewheel={true}
      speed={1000}
      spaceBetween={0}
    >
      <SwiperSlide>
        <div className={`${styles.slide} ${styles.hail}`}>
          <img
            src="/assets/remote-roofing-logo-white.png"
            alt="logo"
            className={`${styles.hail__logo} fade-in-top-down`}
          />
          <div className={styles.hail__content}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginRight: "20px",
              }}
            >
              <img
                src="/assets/hail-button.png"
                alt="map-image"
                width="70"
                height="70"
                className="fade-in-top-down"
                style={{ animationDelay: ".5s" }}
              />
              <div style={{ flex: "1 0" }}>
                <div
                  style={{
                    border: "0.5px dashed #E5E5E5",
                    animationDelay: ".7s",
                    width: 0,
                    height: 0,
                  }}
                  className="scale-h-up"
                ></div>
              </div>
            </div>
            <div style={{ flex: "1 0" }}>
              <h1 className={`${styles.hail__title} fade-in-top-down`}>DFW HAIL</h1>
              <p className={`${styles.hail__description} fade-in-top-down`}>
                {"The DFW metroplex is in the heart of the nation's hail alley"}.
              </p>

              <div style={{ padding: "20px 0" }}>
                {/* Hail and Cloud */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ position: "relative" }}>
                    <img src="/assets/map-hail.png" />
                    <div
                      style={{
                        position: "absolute",
                        top: "35%",
                        right: "10%",
                        border: "1px dashed #E5E5E5",
                        borderRadius: "50%",
                        animationDelay: "1.3s",
                      }}
                      className="fade-in-top-down"
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <img src="/assets/hail.png" width={100} height={100} />
                        <div
                          style={{
                            width: "350px",
                            position: "absolute",
                            top: "-50%",
                            left: "78%",
                            transform: "rotate(-25deg)",
                          }}
                        >
                          <div
                            style={{
                              width: 0,
                              border: "0.5px dashed #E5E5E5",
                              animationDelay: "1.8s",
                            }}
                            className="scale-w-up"
                          ></div>
                        </div>
                        <p
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: 0,
                            transform: "translate(-150%, -50%)",
                            margin: 0,
                            whiteSpace: "nowrap",
                            fontSize: "30px",
                            fontStyle: "bolder",
                          }}
                          className="scale-w-up"
                        >
                          {'1.5" + HAIL'}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div style={{ flex: "0 0" }}>
                    <img src="assets/cloud.png" style={{ marginTop: "-70px" }} />
                    <img
                      src="assets/roof-scheme.png"
                      style={{ margin: "80px 0 0 -50px", width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`${styles["hail-slide"]} ${styles.hail}`}>
          {/* Roof Hail Impacts */}
          <div className={styles.hail__content} style={{ margin: "0" }}>
            <div
              style={{
                margin: "0 55px 0 34.5px",
                border: "0.5px dashed #E5E5E5",
              }}
            ></div>
            <div style={{
              flex: "1 0",
              padding: "20px 0",
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <div style={{ flex: "0 0 50%", padding: "0 50px" }}>
                <img src="/assets/impact-detail.png" width="100%" style={{ borderRadius: "30px" }} />
              </div>
              <div style={{ flex: "0 0 50%", padding: "0 50px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <h3 style={{ fontSize: "48px", fontStyle: "bolder", margin: 0 }}>HAIL IMPACTS</h3>
                <p>Classified as indentations on the surface of the shingle as a causation of hail</p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
