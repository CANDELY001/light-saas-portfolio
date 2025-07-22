"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import startImage from "@/assets/star.png";
import spriingImage from "@/assets/spring.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishement with an app designed to track
            your progress, motivate your efforts, and celebrate your success.
          </p>
          <motion.img
            src={startImage.src}
            alt="Star image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{ translateY }}
          />
          <motion.img
            src={spriingImage.src}
            alt="Spring image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{ translateY }}
          />
        </div>
        <div className="flex gap-2 justify-center mt-10">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowIcon className="h-5 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
