import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function NextStepBase({ record }) {
  const [analysisActive, setAnalysisActive] = useState(false);
  const [estimateActive, setEstimateActive] = useState(false);
  const [installActive, setinstallActive] = useState(false);
  const [image, setImage] = useState("");
  const [map, setMap] = useState("");

  const onClickItem = (item) => {
    setAnalysisActive(item === "analysis");
    setEstimateActive(item === "estimate");
    setinstallActive(item === "install");

    switch (item) {
      case "analysis":
        setImage("analysis.png");
        break;
      case "estimate":
        setImage("estimate.png");
        break;
      case "install":
        setImage("illustration.png");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (record) {
      setMap(record.fields["3D-Model"][0]["url"]);
    }
  }, [record]);

  return (
    <div className={`${styles.slide} ${styles["slide-about"]} ${styles.steps}`}>
      <img
        src="/assets/remote-roofing-logo.png"
        alt="logo"
        className={`${styles.logo} fade-in-top-down`}
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
            Next Steps
          </h1>
          <p
            className={styles["sub-title"]}
            style={{ fontWeight: "bold", color: "#858585" }}
          >
            An overview of the next steps based on your roof analysis{" "}
          </p>
        </div>

        <div
          style={{
            marginTop: "5%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              flex: "0 0 45%",
              padding: "0 0 0 5%",
              color: "#868686",
              fontWeight: "bolder",
            }}
          >
            <p
              className={`${styles.list} ${
                analysisActive ? styles.active : ""
              }`}
              onClick={() => onClickItem("analysis")}
            >
              Analysis Confirmation
            </p>
            {analysisActive && (
              <>
                <p
                  style={{ fontSize: "20px" }}
                >{`Remote Roofing’s team works with your insurance company to confirm damage analysis`}</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src="/assets/clock.png"
                    style={{ marginRight: "10px" }}
                  />
                  <p style={{ fontSize: "20px" }}>2 - 3 BUSINESS DAYS</p>
                </div>
              </>
            )}

            <p
              className={`${styles.list} ${
                estimateActive ? styles.active : ""
              }`}
              onClick={() => onClickItem("estimate")}
            >
              Finalized Estimate
            </p>
            {estimateActive && (
              <>
                <p
                  style={{ fontSize: "20px" }}
                >{`Remote Roofing’s team ensures all the damages have received insurance coverage`}</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src="/assets/clock.png"
                    style={{ marginRight: "10px" }}
                  />
                  <p style={{ fontSize: "20px" }}>3 BUSINESS DAYS</p>
                </div>
              </>
            )}

            <p
              className={`${styles.list} ${
                installActive ? styles.active : ""
              } ${styles.last}`}
              onClick={() => onClickItem("install")}
            >
              Roof Installation
            </p>
            {installActive && (
              <>
                <p
                  style={{ fontSize: "20px" }}
                >{`Remote Roofing’s experienced team completes the roof replacement and installation `}</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src="/assets/clock.png"
                    style={{ marginRight: "10px" }}
                  />
                  <p style={{ fontSize: "20px" }}>24 HOURS</p>
                </div>
              </>
            )}
          </div>
          <div style={{ flex: "0 0 50%", marginTop: "-50px" }}>
            {!(analysisActive || estimateActive || installActive) && (
              <model-viewer
                src={map}
                alt="3D model of map"
                ar
                // loading='lazy'
                camera-controls
                autoplay
              ></model-viewer>
            )}
            {(analysisActive || estimateActive || installActive) && (
              <img src={`/assets/${image}`} style={{ width: "100%" }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
