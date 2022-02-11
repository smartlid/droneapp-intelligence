import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function Hail({ record, setPaginationClass }) {
  const [impactCount, setImpactCount] = useState(0);
  const [address, setAddress] = useState("");
  const [roof, setRoof] = useState("");
  const [map, setMap] = useState("");

  useEffect(() => {
    if (record) {
      setImpactCount(record.fields["# of Hail Impacts"]);
      setAddress(record.fields["Property Address"]);
      setRoof(record.fields["Moisture Exposure"][0]["url"]);
      setMap(record.fields["3D-Model"][0]["url"]);
    }
  }, [record]);

  useEffect(() => {
    setPaginationClass("dark");
  }, [setPaginationClass]);

  return (
    <div
      className={`${styles.dark} ${styles.roof}`}
      style={{
        width: "100%",
        height: "900px",
        position: "relative",
        color: "#fff",
        background: "#000000",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0%",
          left: "10%",
          right: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/assets/remote-roofing-logo-white.png"
          style={{ marginRight: "30px" }}
        />
        <h1 className={`${styles.title} fade-in-top-down`}>
          Roof Intelligence
        </h1>
      </div>

      <div
        style={{
          position: "absolute",
          top: "300px",
          left: "200px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <p
          className={styles["sub-title"]}
          style={{ width: "120px", margin: "0 20px 0 0" }}
        >
          MOISTURE RISK
        </p>
        <img src={roof} width={100} style={{ borderRadius: "10px" }} />
      </div>

      <div
        style={{
          position: "absolute",
          top: "220px",
          left: "50%",
          transform: "translate(-50%)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src="/assets/cloud-rain.png" width={77} />
        <h1
          style={{
            fontWeight: "bold",
            fontSize: "72px",
            lineHeight: "94px",
            color: "#ACD7FF",
            margin: "0 20px 0",
          }}
        >
          {impactCount}
        </h1>
        <p
          className={styles["sub-title"]}
          style={{ width: "130px", margin: 0 }}
        >
          Hail Impact Detections
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          top: "300px",
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
          <img src="/assets/roof.png" width={50} />
          <img src="/assets/metal.png" width={50} />
        </div>
        <div>
          <p className={styles["sub-title"]} style={{ margin: "15px 0" }}>
            SHINGLES
          </p>
          <p className={styles["sub-title"]} style={{ margin: "15px 0" }}>
            SOFT METAL
          </p>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "340px",
          left: "470px",
          width: "200px",
          height: "170px",
          border: "dashed #ACD7FF",
          borderWidth: "1px 1px 0 0",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          top: "310px",
          left: "50%",
          width: "0",
          height: "200px",
          border: "dashed #ACD7FF",
          borderWidth: "1px 1px 0 0",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          top: "340px",
          right: "490px",
          width: "180px",
          height: "170px",
          border: "dashed #ACD7FF",
          borderWidth: "1px 0 0 1px",
        }}
      ></div>

      <img
        src="/assets/grid-pattern.png"
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          height: "300px",
          transform: "translateX(-50%)",
          width: "100%",
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
          alt="3D model of map"
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
          margin: 0,
        }}
      >
        {address}
      </p>
    </div>
  );
}
