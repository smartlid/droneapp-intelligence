import { Swiper, SwiperSlide } from "swiper/react";
import Home from "./slides/Home.jsx";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative"

import SwiperCore, {
  EffectCreative,
  Mousewheel,
  Pagination,
} from "swiper";

SwiperCore.use([
  EffectCreative,
  Mousewheel,
  Pagination,
]);

export default function Location() {
  return (
    <Swiper
      direction="vertical"
      pagination={{ clickable: true }}
      effect="creative"
      creativeEffect={{
        prev: { shadow: true, translate: [0, 0, -400] },
        next: { translate: [0, '100%', 0] }
      }}
      slidesPerView={1}
      mousewheel={true}
      longSwipesMs={2000}
    >
      <SwiperSlide><Home /></SwiperSlide>
      <SwiperSlide style={{ backgroundColor: 'red' }}>Slide 2</SwiperSlide>
      <SwiperSlide style={{ backgroundColor: 'yellow' }}>Slide 3</SwiperSlide>
      <SwiperSlide style={{ backgroundColor: 'green' }}>Slide 4</SwiperSlide>
    </Swiper>
  );
}
