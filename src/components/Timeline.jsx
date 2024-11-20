import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FaHome } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";

const Timeline = () => {
  return (
    <div className=" pb-14">
      <div
        className=" flex justify-center pb-6"
        data-aos="zoom-in-up"
        data-aos-duration="1500"
      >
        <h1 className=" text-center text-4xl sm:text-6xl md:text-7xl  font-bold">
          Time
        </h1>
        <h1 className=" text-center text-4xl sm:text-6xl md:text-7xl  font-bold text-yellow-400">
          line
        </h1>
      </div>
      <div data-aos="zoom-in-up" data-aos-duration="1500">
        <VerticalTimeline lineColor="#FACC15">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#000", color: "#000" }}
            contentArrowStyle={{ borderRight: "10px solid  #000" }}
            date="2018"
            iconStyle={{ background: "#000", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title font-bold text-white text-3xl">
              SEE
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-white font-semibold text-xl">
              Namuna Vidya Mandir, Biratnagar
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FACC15", color: "#000" }}
            contentArrowStyle={{ borderRight: "10px solid  #FACC15" }}
            date="2019 - 2021"
            iconStyle={{ background: "#FACC15", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title font-bold text-3xl">
              +2, Commerce
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-semibold text-xl">
              Merryland College, Biratnagar
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#000", color: "#000" }}
            contentArrowStyle={{ borderRight: "10px solid  #000" }}
            date="2021 - 2024"
            iconStyle={{ background: "#000", color: "#fff" }}
            icon={<IoSchoolSharp />}
          >
            <h3 className="vertical-timeline-element-title font-bold text-white text-3xl">
              Bsc. Hons Computing
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-white font-semibold text-xl">
              Islington College, Kathmandu
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FACC15", color: "#000" }}
            contentArrowStyle={{ borderRight: "10px solid  #FACC15" }}
            date="2024"
            iconStyle={{ background: "#FACC15", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title font-bold text-3xl">
              Internship, Web Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle font-semibold text-xl">
              Princelab Pvt.Ltd
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Timeline;
