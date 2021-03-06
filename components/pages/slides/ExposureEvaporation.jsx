import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function ExposureEvaporation({ record }) {
  const [evaporationActive, setEvaporationActive] = useState(true);
  const [buildActive, setBuildActive] = useState(false);
  const [deckingActive, setDeckingActive] = useState(false);
  const [image, setImage] = useState("evaporation");
  const [roof, setRoof] = useState("");

  const onClickItem = (item) => {
    setEvaporationActive(item === "evaporation");
    setBuildActive(item === "build-up");
    setDeckingActive(item === "decking");

    switch (item) {
      case "evaporation":
        setImage("evaporation");
        break;
      case "build-up":
        setImage("build-up");
        break;
      case "decking":
        setImage("decking");
        break;
      default:
        break;
    }
  };

  function initComparisons() {
    var x, i;
    x = document.getElementsByClassName("img-comp-overlay");

    for (i = 0; i < x.length; i++) {
      compareImages(x[i]);
    }

    function compareImages(img) {
      var slider,
        img,
        clicked = 0,
        w,
        h;

      w = img.offsetWidth;
      h = img.offsetHeight;

      img.style.width = w / 2 + "px";

      slider = document.createElement("DIV");
      slider.setAttribute("class", "img-comp-slider");
      slider.setAttribute("id", "img-comp-slider");
      slider.innerHTML += "< >";
      img.parentElement.insertBefore(slider, img);
      slider.style.top = h / 2 - slider.offsetHeight / 2 + "px";
      slider.style.left = w / 2 - slider.offsetWidth / 2 + "px";
      slider.addEventListener("mousedown", slideReady);
      window.addEventListener("mouseup", slideFinish);
      slider.addEventListener("touchstart", slideReady);
      window.addEventListener("touchend", slideFinish);

      function slideReady(e) {
        console.log("Slide Ready");
        e.preventDefault();
        clicked = 1;
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
      }

      function slideFinish() {
        clicked = 0;
      }

      function slideMove(e) {
        var pos;
        if (clicked == 0) return false;
        pos = getCursorPos(e);
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        slide(pos);
      }

      function getCursorPos(e) {
        var a,
          x = 0;
        e = e.changedTouches ? e.changedTouches[0] : e;
        a = img.getBoundingClientRect();
        x = e.pageX - a.left;
        x = x - window.pageXOffset;

        return x;
      }

      function slide(x) {
        img.style.width = x + "px";
        slider.style.left = img.offsetWidth - slider.offsetWidth / 2 + "px";
      }
    }
  }

  useEffect(() => {
    if (record) {
      setRoof(record.fields["Moisture Exposure"][0]["url"]);
    }
  }, [record]);

  useEffect(() => {
    if (deckingActive) {
      initComparisons();
    }
  }, [deckingActive]);

  return (
    <>
      <div className={`${styles.slide} ${styles.dark} ${styles.exposure}`}>
        <img
          src="/assets/remote-roofing-logo-white.png"
          alt="logo"
          className={`${styles.logo} fade-in-top-down`}
        />

        <div className={styles.content} style={{ textAlign: "right" }}>
          <h1 className={`${styles.title} fade-in-top-down`}>
            Moisture Exposure
          </h1>
          <p className={`${styles["sub-title"]} fade-in-top-down`}>
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
              {/* <img src={`/assets/${image}`} width="100%" /> */}
              <model-viewer
                src={`/assets/models/${image}/scene.gltf`}
                poster="/assets/models/poster.png"
                alt="Roof"
                ar
                // loading='lazy'
                camera-controls
                camera-orbit="-578.6deg 86.78deg auto"
                auto-rotate
              ></model-viewer>
            </div>
            <div
              style={{
                flex: "0 0 50%",
                padding: "0 50px",
              }}
            >
              <div>
                <div
                  className={`${styles.exposure__title} ${
                    evaporationActive ? styles.active : ""
                  }`}
                  onClick={() => onClickItem("evaporation")}
                >
                  Evaporation
                </div>
                <div
                  className={`${styles.exposure__title} ${
                    buildActive ? styles.active : ""
                  }`}
                  onClick={() => onClickItem("build-up")}
                >
                  Build up
                </div>
                <div
                  className={`${styles.exposure__title} ${
                    deckingActive ? styles.active : ""
                  } ${styles.last}`}
                  onClick={() => onClickItem("decking")}
                >
                  Decking
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {deckingActive && (
        <div
          className={`${styles.slide} ${styles.dark} ${styles.exposure}`}
          style={{ width: "100%", height: "800px", position: "relative" }}
        >
          <div
            className={styles.content}
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <div style={{ flex: "0 0 45%", paddingRight: "5%" }}>
              <h1
                className="fade-in-top-down"
                style={{
                  fontSize: "72px",
                  fontWeight: "bold",
                  lineHeight: "94px",
                  margin: "0 0 10px",
                }}
              >
                Thermal Scan
              </h1>
              <p className={`${styles["sub-title"]} fade-in-top-down`}>
                A thermal depth-vision scan of the roof to detect risks for
                moisture exposure.
              </p>
              <img src="/assets/scan-level.png" style={{ marginTop: "70px" }} />
            </div>

            <div style={{ marginTop: "-50px" }}>
              <div style={{ position: "relative" }}>
                <div className="img-comp-container">
                  <div className="img-comp-img">
                    <img src={roof} width="550px" height="500px" />
                  </div>
                  <div className="img-comp-img img-comp-overlay">
                    <img
                      src="/assets/healthy-roof.png"
                      width="550px"
                      height="500px"
                    />
                  </div>
                </div>
                <hr
                  style={{
                    position: "absolute",
                    left: "50px",
                    bottom: "-100px",
                    border: "dashed #E5E5E5",
                    borderWidth: "0 0 0 2px",
                    height: "95px",
                  }}
                />
                <hr
                  style={{
                    position: "absolute",
                    right: "50px",
                    bottom: "-100px",
                    border: "dashed #E5E5E5",
                    borderWidth: "0 0 0 2px",
                    height: "95px",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "100px",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "24px",
                    lineHeight: "47px",
                    color: "#c5c5c5",
                    margin: "0 0 0 -50px",
                  }}
                >
                  HEALTHY ROOF
                </p>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "24px",
                    lineHeight: "47px",
                    color: "#c5c5c5",
                    margin: "0 -20px 0 0",
                  }}
                >
                  MY ROOF
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
