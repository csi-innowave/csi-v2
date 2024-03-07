"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider.tsx";

export default function ImagesSliderDemo() {
  const images = [
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708521009/CSI%20Website/Gallery/mlduoo38gu0h85stcpdk.jpg",
    "https://res.cloudinary.com/dpp2rltxx/image/upload/v1709131039/csi/hero/bnjp2imdhm8ezvcr3clk.jpg",
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708769478/CSI%20Website/Gallery/ewbkh5mwxgeo7sgybvfr.jpg",
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708769585/CSI%20Website/Gallery/wpgnapkpa5j2wxuk2m5x.jpg",
    "https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708521349/CSI%20Website/Gallery/f7n7ssq7ggdnf1mp2bfj.jpg",
  ];
  return (
    <ImagesSlider
      className="sm:h-[40rem] h-[20rem] rounded-2xl"
      images={images}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        {/* <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          The hero section slideshow <br /> nobody asked for
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button> */}
      </motion.div>
    </ImagesSlider>
  );
}
