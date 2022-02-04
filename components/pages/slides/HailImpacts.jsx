import { useEffect, useState } from "react";
import "@google/model-viewer";
import styles from "./styles.module.scss";

export default function Hail({ record }) {
  const [index, setIndex] = useState(0);
  const [hailImpacts, setHailImpacts] = useState([]);
  const [impactCount, setImpactCount] = useState(0);
  const [address, setAddress] = useState("");
  const [map, setMap] = useState("");
  const [granularDamage, setGranularDamage] = useState("");
  const [metalDamage, setMetalDamage] = useState("");
  const [impactActive, setImpactActive] = useState(true);
  const [granularActive, setGranularActive] = useState(false);
  const [metalActive, setMetalActive] = useState(false);

  const onClickImage = () => {
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
      setAddress(record.fields["Property Address"]);
      setMap(record.fields["3D-Model"][0]["url"]);
      setGranularDamage(record.fields["SG-1"][0]["url"]);
      setMetalDamage(record.fields["SM-1"][0]["url"]);
    }
  }, [record]);

  const onClickItem = (item) => {
    setImpactActive(item === "impact");
    setGranularActive(item === "granular");
    setMetalActive(item === "metal");
  }

  return (
      <>
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
              <div style={{ flex: "0 0 45%" }}>
                { impactActive && (
                  <img
                    src={hailImpacts.length && hailImpacts[index]}
                    width="100%"
                    style={{ borderRadius: "30px" }}
                    onClick={onClickImage}
                  />
                )}
                { granularActive && (
                  <img src={granularDamage} width="100%" style={{ borderRadius: "30px" }} />
                )}
                { metalActive && (
                  <img src={metalDamage} width="100%" style={{ borderRadius: "30px" }} />
                )}
              </div>
              <div
                style={{
                  flex: "0 0 50%",
                  padding: "0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ textAlign: "left" }}>
                  <div className={`${styles.impacts__title} ${impactActive ? styles.active : ""}`} onClick={() => onClickItem("impact")}>
                    Hail Impacts
                  </div>
                  { impactActive && (
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
                        <p className={styles["impacts__sub-title"]}>
                          Cracked Shingles
                        </p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src="/assets/granule.png"
                          width={30}
                          style={{ marginRight: "10px" }}
                        />
                        <p className={styles["impacts__sub-title"]}>
                          Granule Reduction
                        </p>
                      </div>
                    </div>
                  )}

                  <div className={`${styles.impacts__title} ${granularActive ? styles.active : ""}`} onClick={() => onClickItem("granular")}>Granular Loss</div>
                  { granularActive && (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginRight: "15px",
                        }}
                      >
                        <img
                          src="/assets/bruised-shingle.png"
                          width={30}
                          style={{ marginRight: "10px" }}
                        />
                        <p className={styles["impacts__sub-title"]}>
                          Bruised Shingles
                        </p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src="/assets/gutter-build-up.png"
                          width={30}
                          style={{ marginRight: "10px" }}
                        />
                        <p className={styles["impacts__sub-title"]}>
                          Gutter Build Up
                        </p>
                      </div>
                    </div>
                  )}

                  <div className={`${styles.impacts__title} ${metalActive ? styles.active : ""} ${styles.last}`} onClick={() => onClickItem("metal")}>
                    Metal Damage
                  </div>
                  { metalActive && (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginRight: "30px",
                        }}
                      >
                        <img
                          src="/assets/improper-ventillation.png"
                          width={30}
                          style={{ marginRight: "10px" }}
                        />
                        <p className={styles["impacts__sub-title"]}>
                          Improper Ventillation
                        </p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src="/assets/structural-defect.png"
                          width={30}
                          style={{ marginRight: "10px" }}
                        />
                        <p className={styles["impacts__sub-title"]}>
                          Structural Defects
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        { metalActive && (
          <div
            className={`${styles.dark} ${styles.impacts}`}
            style={{ width: "100%", height: "100%", position: "relative" }}
          >
            <div
              style={{
                position: "absolute",
                top: "50px",
                left: "200px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src="/assets/cloud-rain.png" width={118} />
              <h1 style={{ fontWeight: "bold", fontSize: "120px", lineHeight: "156px", color: "#ACD7FF", margin: "0 20px 0" }}>
                {impactCount}
              </h1>
              <p style={{ fontWeight: 400, fontSize: "24px", lineHeight: "31px", color: "#c5c5c5", margin: 0, width: "140px" }}>Hail Impact Detections</p>
            </div>

            <div
              style={{
                position: "absolute",
                top: "50px",
                right: "250px",
                display: "flex",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  marginRight: "20px",
                }}
              >
                <img src="/assets/roof.png" width={80} />
                <img src="/assets/metal.png" width={80} />
              </div>
              <div>
                <p style={{ fontWeight: 400, fontSize: "24px", lineHeight: "31px", color: "#c5c5c5",margin: "36px 0" }}>SHINGLES</p>
                <p style={{ fontWeight: 400, fontSize: "24px", lineHeight: "31px", color: "#c5c5c5",margin: "36px 0" }}>SOFT METAL</p>
              </div>
            </div>

            <img
              src="/assets/grid-pattern.png"
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                height: "300px",
                transform: "translateX(-50%)",
                width: "100%"
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "30px",
                left: "50%",
                transform: "translate(-50%)",
              }}
            >
              <model-viewer
                src={map}
                poster="/assets/models/poster.png"
                alt='Roof'
                ar
                // loading='lazy'
                camera-controls
                autoplay
              ></model-viewer>
            </div>
            <p
              style={{
                position: "absolute",
                bottom: "15px",
                left: "50%",
                transform: "translate(-50%)",
                fontWeight: 700,
                fontSize: "24px",
                lineHeight: "31px",
                color: "#c5c5c5",
                margin: 0
              }}
            >
              {address}
            </p>
          </div>
        )}
    </>
  );
}
