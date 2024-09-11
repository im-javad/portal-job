import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect } from "react";
import { FaUserTie } from "react-icons/fa";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { PiReadCvLogoFill } from "react-icons/pi";
import { RiGlobalFill } from "react-icons/ri";

const WorkOur = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("@/assets/js/components/our-work").then((mod) => {
        mod.initCounters();
      });
    }
  }, []);

  return (
    <section id="work-our" className="mt-[8rem]">
      <div className="header flex-col flex items-center mb-7 px-4">
        <h2 className="text-appColor_2 text-3xl font-bold">Our work!</h2>
        <h3 className="text-xl font-bold text-appColor_4 text-center">
          General details of our efforts and successful works
        </h3>
      </div>
      <div className="counters-slice">
        <div className="background h-[50rem] md:h-[20rem] md:60"></div>
        <div className="items flex flex-col md:flex-row justify-center items-center">
          <div className="item mb-10 md:mb-0">
            <FaUserTie className="icon" size={45} />
            <strong>Active job seekers</strong>
            <div className="counter-group">
              <div className="counter" data-countto="1000" data-duration="3000">
                0
              </div>
            </div>
          </div>
          <div className="item mb-10 md:mb-0">
            <HiMiniBuildingOffice className="icon" size={45} />
            <strong>Cooperation of companies</strong>
            <div className="counter-group">
              <div className="counter" data-countto="150" data-duration="3000">
                2000
              </div>
            </div>
          </div>
          <div className="item mb-10 md:mb-0">
            <PiReadCvLogoFill className="icon" size={45} />
            <strong>Submitted resumes</strong>
            <div className="counter-group">
              <div className="counter" data-countto="350" data-duration="3000">
                0
              </div>
            </div>
          </div>
          <div className="item">
            <RiGlobalFill className="icon" size={45} />
            <strong>Global projects</strong>
            <div className="counter-group">
              <div className="counter" data-countto="70" data-duration="3000">
                0
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkOur;
