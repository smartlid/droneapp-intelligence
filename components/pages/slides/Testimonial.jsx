import slideStyles from "./styles.module.scss"

export default function Testimonial() {

  return (
    <div className={`${slideStyles.slide}`}>
      <img src="/assets/testimonial.png" width="100%" />
    </div>
  );
}