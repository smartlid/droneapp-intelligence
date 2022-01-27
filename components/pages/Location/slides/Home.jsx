import { useEffect, useState } from "react";
import { useAppContext } from "../../../../pages/_app";
import slideStyles from "./styles.module.scss"

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'

export default function Home() {
  const { record } = useAppContext();
  const [address, setAddress] = useState('');
  const [obj, setObj] = useState(null);

  const init = () => {
    const obj = useLoader(OBJLoader, '../../../../public/assets/texas-map-3d.obj');
  }

  useEffect(() => {
    if (record) {
      setAddress(record.fields['Property Address']);
    }
  }, [record])

  init();

  return (
    <div className={`${slideStyles.slide} ${slideStyles["slide-home"]} ${slideStyles["bg-light"]}`}>
      <img src="/assets/remote-roofing-logo.png" alt="logo" className={`${slideStyles["home-logo"]} fade-in-top-down`} />
      <h1 className={`${slideStyles["home-title"]} fade-in-top-down`}><span style={{ color: '#075BBD' }}>AI</span> Roof Analysis</h1>
      <h3 className={`${slideStyles["home-address"]} fade-in-top-down`}>{address}</h3>

      <primitive object={obj} />
    </div>
  );
}