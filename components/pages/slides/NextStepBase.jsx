import slideStyles from "./styles.module.scss"

export default function NextStepBase() {

  return (
    <div className={`${slideStyles.slide}`}>
      <img src="/assets/next-step-base.png" width="100%" />
    </div>
  );
}