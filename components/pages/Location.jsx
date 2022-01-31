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
import HailImpacts from "./slides/HailImpacts";
import GranularDamage from "./slides/GranularDamage";
import MetalDamage from "./slides/MetalDamage";
import ExposureEvaporation from "./slides/ExposureEvaporation";
import ExposureBuild from "./slides/ExposureBuild";
import ExposureDecking from "./slides/ExposureDecking";
import RoofIntelligenceResult from "./slides/RoofIntelligenceResult";
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

  const setPaginationClass = (className) => {
    const els = document.getElementsByClassName('swiper-pagination');
    if (els && els.length) {
      const swiperPagination = els[0];
      if (className === 'dark') {
        swiperPagination.classList.remove('light');
        swiperPagination.classList.add(className);
      } else if (className === 'light') {
        swiperPagination.classList.remove('dark')
        swiperPagination.classList.add(className);
      }
    }

    return;
  }

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
      effect="creative"
      creativeEffect={{
        prev: { shadow: true, translate: [0, 0, -400] },
        next: { translate: [0, '100%', 0] }
      }}
      slidesPerView={1}
      mousewheel={true}
      speed={1000}
    >
      {/* <SwiperSlide>
        {({ isActive }) => isActive && (<Home record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<Product record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<Overview record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<Storm record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<Hail record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<Insurance record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<RoofIntelligence record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<HailImpacts record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<GranularDamage record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<MetalDamage record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<ExposureEvaporation record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<ExposureBuild record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<ExposureDecking record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<RoofIntelligenceResult record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide> */}
      <SwiperSlide>
        {({ isActive }) => isActive && (<About record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<Benefits record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<PersonalExperience record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<Testimonial record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<NextStepBase record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<NextStepAnalysis record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<NextStepEstimate record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<NextStepInstall record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => isActive && (<RoofCustomization record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
    </Swiper>
  );
}
