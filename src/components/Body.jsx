import React from "react";
import ImagesSliderDemo from "../components/Homepage/ImgSlider";
import SparklesPreview from "./Homepage/Hero";
import Sponsor from "./Homepage/Sponsor";
import HomeAbout from "./Homepage/HomeAbout";
import InfiniteMovingCardsDemo from "./Homepage/Events";

const Body = () => {
  return (
    <div className="flex justify-center">
      <div className="w-8/12 sm:m-2 m-2 ">
        <div className="flex justify-center">
          <SparklesPreview />
        </div>
        <ImagesSliderDemo />
        <div className="flex justify-center">
          <Sponsor />
        </div>
        <div className="flex justify-center">
          <HomeAbout />
        </div>
        <div className="">
          <InfiniteMovingCardsDemo />
        </div>
      </div>
    </div>
  );
};

export default Body;
