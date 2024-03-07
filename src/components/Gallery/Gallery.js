import React from "react";
import ImagesSliderDemo from "../Homepage/ImgSlider";
import galleryData from "./GalleryData";
import { motion } from "framer-motion";
const Gallery = () => {
  const variants = {
    initial: {
      opacity: 0.8,
      scale: 0.95,
    },
    hover: {
      opacity: 1,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="pt-10">
      <div className="sm:h-[60rem] h-screen z-50 w-full   dark:bg-grid-white/[0.2] bg-grid-black/[0.2]  flex py-16 sm:py-10   justify-center">
        <div className="absolute pointer-events-none inset-0 flex justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="text-4xl sm:text-7xl w-10/12  ">
          <div className="font-bold  relative z-20 bg-clip-text mb-5 text-transparent text-center bg-gradient-to-r from-blue-600 to-indigo-200 ">
            Our Memories
          </div>
          <ImagesSliderDemo />
          <motion.section
            className="text-center py-5"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <section className="text-center py-5">
              <h1 className="font-bold  relative z-20 bg-clip-text mb-5 text-transparent text-center bg-gradient-to-r from-blue-600 to-indigo-200">
                Photos
              </h1>
              <p className="text-white"></p>
            </section>
          </motion.section>

          <motion.div
            className="text-center mx-10 md:mx-auto w-auto "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              className="card rounded-md "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 m-5">
                {galleryData.map((image) => (
                  // eslint-disable-next-line react/jsx-key
                  <motion.div
                    className="card rounded-md "
                    variants={variants}
                    whileHover="hover"
                  >
                    <div
                      key={image.title}
                      className="bg-white p-1 shadow-md rounded-sm m-2 h-96"
                    >
                      <img
                        src={image.imageLink}
                        alt={image.title}
                        className="w-full h-full  mb-4 rounded-md object-contain"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
