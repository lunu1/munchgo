import React from "react";
import { motion } from "framer-motion";
import Food from "../assets/food.jpg";
import Snowfall from "react-snowfall";

const IntroSection = () => {
  return (
    <section className="relative py-16">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-7">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left mb-10 lg:mb-0 lg:w-1/2"
        >
          <h1 className="text-4xl lg:text-4xl font-bold text-gray-800 mb-6 font-custom tracking-tight">
            Welcome to <span className="text-yellow-500">Munch & Go</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your go-to destination for delicious, freshly prepared food in a cozy atmosphere. From
            freshly brewed coffee to our signature “walking taco” and wholesome meals, enjoy an
            experience focused on quality and customer satisfaction. Join us today to taste the
            difference, where great food and good moments come together!
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-600 transition-all duration-300"
          >
            Discover Flavors
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2"
        >
          <img
            src={Food}
            alt="Delicious Food"
            className="rounded-xl shadow-lg"
            />
            
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
