import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Airtable from "airtable";
import { Swiper, SwiperSlide } from "swiper/react";
import Home from "./slides/Home";
import Product from "./slides/Product";
import Overview from "./slides/Overview";
import Storm from "./slides/Storm";
import Hail from "./slides/Hail";
import Insurance from "./slides/Insurance";
import RoofIntelligence from "./slides/RoofIntelligence";
import MoistureFirst from "./slides/MoistureFirst";
import MoistureSecond from "./slides/MoistureSecond";
import MoistureThird from "./slides/MoistureThird";
import About from "./slides/About";
import Benefits from "./slides/Benefits";
import PersonalExperience from "./slides/PersonalExperience";
import Testimonial from "./slides/Testimonial";
import NextStepBase from "./slides/NextStepBase";
import NextStepAnalysis from "./slides/NextStepAnalysis";
import NextStepEstimate from "./slides/NextStepEstimate";
import NextStepInstall from "./slides/NextStepInstall";
import RoofCustomization from "./slides/RoofCustomization";

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
      speed={1000}
    >
      <SwiperSlide>
        {({ isActive }) => isActive && (<Home record={record} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<Product record={record} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<Overview record={record} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<Storm record={record} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<Hail record={record} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<Insurance record={record} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<RoofIntelligence record={record} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<MoistureFirst record={record} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<MoistureSecond record={record} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<MoistureThird record={record} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<About record={record} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<Benefits record={record} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<PersonalExperience record={record} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<Testimonial record={record} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<NextStepBase record={record} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<NextStepAnalysis record={record} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<NextStepEstimate record={record} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<NextStepInstall record={record} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<RoofCustomization record={record} />)}
      </SwiperSlide>
    </Swiper>
  );
}
