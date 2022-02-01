import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Airtable from "airtable";
import { Swiper, SwiperSlide } from "swiper/react";
import Home from "./slides/Home";
const ProductShingle = dynamic(
  () => import("./slides/ProductShingle"),
  { ssr: false }
)
const ProductUnderlayment = dynamic(
  () => import("./slides/ProductUnderlayment"),
  { ssr: false }
)
const ProductDecking = dynamic(
  () => import("./slides/ProductDecking"),
  { ssr: false }
)
import Overview from "./slides/Overview";
import Storm from "./slides/Storm";
import Hail from "./slides/Hail";
import Insurance from "./slides/Insurance";
const RoofIntelligence = dynamic(
  () => import("./slides/RoofIntelligence"),
  { ssr: false }
)
const HailImpacts = dynamic(
  () => import("./slides/HailImpacts"),
  { ssr: false }
)
import GranularDamage from "./slides/GranularDamage";
import MetalDamage from "./slides/MetalDamage";
import ExposureEvaporation from "./slides/ExposureEvaporation";
import ExposureBuild from "./slides/ExposureBuild";
import ExposureDecking from "./slides/ExposureDecking";
const RoofIntelligenceResult = dynamic(
  () => import("./slides/RoofIntelligenceResult"),
  { ssr: false }
)
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
  Mousewheel,
  Pagination,
} from "swiper";

SwiperCore.use([
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
      slidesPerView={1}
      mousewheel={true}
      speed={1000}
    >
      <SwiperSlide>
        {(<Home record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {(<ProductShingle record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {(<ProductUnderlayment record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {(<ProductDecking record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {(<Overview record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {(<Storm record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {(<Hail record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {(<Insurance record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {(<RoofIntelligence record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {(<HailImpacts record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {(<GranularDamage record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {(<MetalDamage record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {(<ExposureEvaporation record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {(<ExposureBuild record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {(<ExposureDecking record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {(<RoofIntelligenceResult record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {(<About record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {(<Benefits record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {(<PersonalExperience record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {(<Testimonial record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {(<NextStepBase record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {(<NextStepAnalysis record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {(<NextStepEstimate record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {(<NextStepInstall record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
      <SwiperSlide>
        {(<RoofCustomization record={record} setPaginationClass={setPaginationClass} />)}
      </SwiperSlide>
    </Swiper>
  );
}
