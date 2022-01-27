import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Airtable from "airtable";
import { Swiper, SwiperSlide } from "swiper/react";
import Home from "./slides/Home";
import Product from "./slides/Product";
import Overview from "./slides/Overview";

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
  const [record, setRecord] = useState();

  // Get airtable data
  useEffect(() => {
    const { id } = router.query;
    if (id) {
      const recordKey = id[0];
      // Should use env for api keys
      const base = new Airtable({ apiKey: "keyIwpcQ1fBXlxCcq" }).base(
        "app4MqGYcYLzCIZTb"
      );
      base("Table 1").find(recordKey, (err, record) => {
        if (err) {
          console.error(err);
          return;
        }
console.log('After getting data: ', record)
        setRecord(record);
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
      <SwiperSlide><Home record={record} /></SwiperSlide>
      <SwiperSlide><Product record={record} /></SwiperSlide>
      <SwiperSlide><Overview record={record} /></SwiperSlide>
      <SwiperSlide><Home record={record} /></SwiperSlide>
    </Swiper>
  );
}
