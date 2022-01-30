import slideStyles from "./styles.module.scss"

export default function About() {

  return (
    <div className={`${slideStyles.slide}`}>
      <img src="/assets/about.png" width="100%" />
    </div>
  );
}