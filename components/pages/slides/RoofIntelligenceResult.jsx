import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "@google/model-viewer";
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
      style={{ width: "100%", height: "100%", position: "relative", color: "#fff", background: "#000000" }}
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
          width={180}
          height={120}
          style={{ marginRight: "30px" }}
        />
        <h1
          className="fade-in-top-down"
          style={{ fontSize: "70px", fontStyle: "bolder", margin: 0 }}
        >
          Roof Intelligence
        </h1>
      </div>

      <div
        style={{
          position: "absolute",
          top: "200px",
          left: "200px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <p style={{ width: "100px", marginRight: "20px" }}>MOISTURE RISK</p>
        <img src={roof} width={100} style={{ borderRadius: "10px" }} />
      </div>

      <div
        style={{
          position: "absolute",
          top: "120px",
          left: "50%",
          transform: "translate(-50%)",
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
          top: "200px",
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
          <img src="/assets/roof.png" />
          <img src="/assets/metal.png" />
        </div>
        <div>
          <p style={{ margin: "30px 0" }}>SHINGLES</p>
          <p style={{ margin: "30px 0" }}>SOFT METAL</p>
        </div>
      </div>

      <img
        src="/assets/grid-pattern.png"
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translate(-50%, 40%)",
        }}
      />
      <div
        src="/assets/map-model.png"
        style={{
          position: "absolute",
          bottom: "2%",
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
        }}
      >
        {address}
      </p>
    </div>
  );
}
