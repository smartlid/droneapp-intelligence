import { useEffect, useState } from "react";
import { useAppContext } from "../../../../pages/_app";
import slideStyles from "./styles.module.scss"

export default function Home() {
  const { record } = useAppContext();
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (record) {
      setAddress(record.fields['Property Address']);
    }
  }, [record])

  return (
    <div className={`${slideStyles.slide} ${slideStyles["slide-home"]} ${slideStyles["bg-light"]}`}>
      <img src="/assets/remote-roofing-logo.png" alt="logo" className={`${slideStyles["home__logo"]} fade-in-top-down`} />
      <h1 className={`${slideStyles["home__title"]} fade-in-top-down`}><span style={{ color: '#075BBD' }}>AI</span> Roof Analysis</h1>
      <h3 className={`${slideStyles["home__address"]} fade-in-top-down`}>{address}</h3>

      <div className={`${slideStyles["home__map-area"]} fade-in-top-down`}>
        <img src="/assets/drone.png" alt="drone" className={`${slideStyles["home__drone"]} fade-in-top-down`} />
      </div>
    </div>
  );
}