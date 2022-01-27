import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
import Airtable from "airtable";

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
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    if (id) {
      const recordKey = id[0];
      const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
        process.env.AIRTABLE_BASE_KEY
      );
      base(process.env.AIRTABLE_TABLE_NAME).find(recordKey, (err, record) => {
        if (err) {
          console.error(err);
          return;
        }
      });
    }
  }, [router.query]);

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
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide style={{ backgroundColor: 'red' }}>Slide 2</SwiperSlide>
      <SwiperSlide style={{ backgroundColor: 'yellow' }}>Slide 3</SwiperSlide>
      <SwiperSlide style={{ backgroundColor: 'green' }}>Slide 4</SwiperSlide>
    </Swiper>
  );
}
