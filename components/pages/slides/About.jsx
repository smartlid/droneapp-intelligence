import { useEffect } from "react"
import slideStyles from "./styles.module.scss"

export default function About({ setPaginationClass }) {
  useEffect(() => {
    setPaginationClass('light');
  }, [setPaginationClass])

  return (
    <div className={`${slideStyles.slide}`}>
      <img src="/assets/about.png" width="100%" />
    </div>
  );
}