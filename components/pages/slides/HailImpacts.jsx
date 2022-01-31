import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";

export default function Hail({ record, setPaginationClass }) {
  const [index, setIndex] = useState(0);
  const [hailImpacts, setHailImpacts] = useState([]);
  const [impactCount, setImpactCount] = useState(0);
  const [address, setAddress] = useState('');

  const onClickImage = () => {
    console.log(index);
    setIndex((oldIndex) => (oldIndex + 1) % 3);
  };

  useEffect(() => {
    if (record) {
      const impacts = [
        record.fields["HI-1"][0].url,
        record.fields["HI-2"][0].url,
        record.fields["HI-3"][0].url,
      ];
      setHailImpacts(impacts);
      setImpactCount(record.fields["# of Hail Impacts"]);
      setAddress(record.fields['Property Address']);
    }
  }, [record]);

  useEffect(() => {
    setPaginationClass("dark");
  }, [setPaginationClass]);

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

          <div className={styles.content}>
            <div
              style={{
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
              }}
            >
              <div style={{ flex: "0 0 35%" }}>
                <img
                  src={hailImpacts.length && hailImpacts[index]}
                  width="100%"
                  style={{ borderRadius: "30px" }}
                />
              </div>
              <div
                style={{
                  flex: "0 0 50%",
                  padding: "0 50px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ textAlign: "left" }}>
                  <div className={`${styles.impacts__title} ${styles.active}`}>
                    Hail Impacts
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginRight: "15px",
                      }}
                    >
                      <img
                        src="/assets/cracked.png"
                        width={30}
                        style={{ marginRight: "10px" }}
                      />
                      <p style={{ fontSize: "18px", width: "70px" }}>
                        Cracked Shingles
                      </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src="/assets/granule.png"
                        width={30}
                        style={{ marginRight: "10px" }}
                      />
                      <p style={{ fontSize: "18px", width: "70px" }}>
                        Granule Reduction
                      </p>
                    </div>
                  </div>
                  <div className={styles.impacts__title}>Granular Damage</div>
                  <div className={`${styles.impacts__title} ${styles.last}`}>
                    Soft Metal Damage
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
          <div
            style={{
              position: "absolute",
              top: "100px",
              left: "200px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src="/assets/cloud-rain.png" width={100} />
            <h1 style={{ fontSize: "70px", margin: "0 20px 0" }}>{impactCount}</h1>
            <p style={{ width: "100px" }}>Hail Impact Detections</p>
          </div>

          <div
            style={{
              position: "absolute",
              top: "100px",
              right: "250px",
              display: "flex",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginRight: "20px" }}>
              <img src="/assets/roof.png" />
              <img src="/assets/metal.png" />
            </div>
            <div>
              <p style={{ margin: "30px 0" }}>SHINGLES</p>
              <p style={{ margin: "30px 0" }}>SOFT METAL</p>
            </div>
          </div>

          <img src="/assets/grid-pattern.png" style={{ position: "absolute", bottom: 0, left: "50%", transform: "translate(-50%, 40%)" }} />
          <img src="/assets/map-model.png" style={{ position: "absolute", bottom: "2%", left: "50%", transform: "translate(-50%)" }} />
          <p style={{ position: "absolute", bottom: "15px", left: "50%", transform: "translate(-50%)" }}>{address}</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
