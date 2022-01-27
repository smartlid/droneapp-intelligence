import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function Product({ record }) {
  const [side, setSide] = useState("Front");
  const [address, setAddress] = useState("");
  const [frontview, setFrontview] = useState("");
  const [roofview, setRoofview] = useState("");

  useEffect(() => {
    if (record) {
      setAddress(record.fields["Property Address"]);
      if (side === "Front") {
        setFrontview(record.fields["Front View"][0]["url"]);
      } else if (side === "Roof") {
        setRoofview(record.fields["Roof Unlabeled"][0]["url"]);
      }
    }
  }, [record, side]);

  const onChange = () => {
    if (side === "Front") setSide("Roof");
    else if (side === "Roof") setSide("Front");
  };

  return (
    <div
      className={`${styles.slide} ${styles["slide-overview"]} ${styles.overview}`}
      onClick={onChange}
    >
      <img
        src="/assets/remote-roofing-logo-white.png"
        alt="logo"
        className={`${styles.overview__logo} fade-in-top-down`}
      />
      <h1 className={`${styles.overview__title} fade-in-top-down`}>
        {side} View
      </h1>
      <h3 className={`${styles.overview__address} fade-in-top-down`}>
        {address}
      </h3>
      {
        <img
          src={frontview}
          style={{
            visibility: `${side === "Front" ? "visible" : "hidden"}`,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -2,
            width: "100%",
            height: "100%",
          }}
        />
      }
      {
        <img
          src={roofview}
          style={{
            visibility: `${side === "Roof" ? "visible" : "hidden"}`,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -2,
            width: "100%",
            height: "100%",
          }}
        />
      }
    </div>
  );
}
