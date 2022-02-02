import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Airtable from "airtable";
import Home from "./slides/Home";
const ProductShingle = dynamic(
  () => import("./slides/ProductShingle"),
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
import ExposureEvaporation from "./slides/ExposureEvaporation";
const RoofIntelligenceResult = dynamic(
  () => import("./slides/RoofIntelligenceResult"),
  { ssr: false }
)
import About from "./slides/About";
import Benefits from "./slides/Benefits";
import PersonalExperience from "./slides/PersonalExperience";
import Testimonial from "./slides/Testimonial";
import NextStepBase from "./slides/NextStepBase";
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
    <>
      {(<Home record={record} setPaginationClass={setPaginationClass} />)}
      {(<ProductShingle record={record} setPaginationClass={setPaginationClass} />)}
      {(<Overview record={record} setPaginationClass={setPaginationClass} />)}
      {(<Storm record={record} setPaginationClass={setPaginationClass} />)}
      {(<Hail record={record} setPaginationClass={setPaginationClass} />)}
      {(<Insurance record={record} setPaginationClass={setPaginationClass} />)}
      {(<RoofIntelligence record={record} setPaginationClass={setPaginationClass} />)}
      {(<HailImpacts record={record} setPaginationClass={setPaginationClass} />)}
      {(<ExposureEvaporation record={record} setPaginationClass={setPaginationClass} />)}
      {(<RoofIntelligenceResult record={record} setPaginationClass={setPaginationClass} />)}
      {(<About record={record} setPaginationClass={setPaginationClass} />)}
      {(<Benefits record={record} setPaginationClass={setPaginationClass} />)}
      {(<PersonalExperience record={record} setPaginationClass={setPaginationClass} />)}
      {(<Testimonial record={record} setPaginationClass={setPaginationClass} />)}
      {(<NextStepBase record={record} setPaginationClass={setPaginationClass} />)}
      {(<RoofCustomization record={record} setPaginationClass={setPaginationClass} />)}
    </>
  );
}
