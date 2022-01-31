import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function MetalDamage({ record, setPaginationClass }) {
  const [damage, setDamage] = useState('');

  useEffect(() => {
    if (record) {
      setDamage(record.fields["SM-1"][0]["url"]);
    }
  }, [record]);

  useEffect(() => {
    setPaginationClass("dark");
  }, [setPaginationClass]);

  return (
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
              src={damage}
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
              <div className={`${styles.impacts__title}`}>
                Hail Impacts
              </div>
              <div className={`${styles.impacts__title}`}>Granular Damage</div>
              <div className={`${styles.impacts__title} ${styles.last} ${styles.active}`}>
                Soft Metal Damage
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
