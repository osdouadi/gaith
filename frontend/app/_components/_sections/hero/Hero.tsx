"use client";
import React, { useEffect, useState } from "react";
import { RiOpenArmLine } from "react-icons/ri";
import { RiPenNibLine } from "react-icons/ri";
import { RiBook3Line } from "react-icons/ri";
import { PiBrain } from "react-icons/pi";
import { RiBardLine } from "react-icons/ri";
import { RiFingerprintLine } from "react-icons/ri";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { RiDoubleQuotesR } from "react-icons/ri";
import { RiDoubleQuotesL } from "react-icons/ri";
import Image from "next/image";
import HeroImage from "/public/images/img-hero.jpeg";

export default function Hero() {
  const [idea, setIdea] = useState(true);
  const [student, setStudent] = useState(false);
  const [knowledge, setKnowledge] = useState(false);
  const [reading, setReading] = useState(false);
  const [fingerPrint, setFingerPrint] = useState(false);
  const [success, setSuccess] = useState(false);
  const [brain, setBrain] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero w-full bg-primary p-12  ">
      <div className="intro-content flex items-center">
        <div className="intro-text flex-1 p-12">
          <h3 className="text-white text-4xl font-semibold leading-relaxed pb-4">
            نادي غيث, هو نادي علمي و ثقافي بجامعة زيان عاشور ولاية الجلفة
          </h3>
          <span className="slogan text-yellow-300 text-3xl font-semibold flex gap-2">
            <RiDoubleQuotesR className="self-start" />
            الطالب كالغيث اينما حل نفع
            <RiDoubleQuotesL className="self-end" />
          </span>
        </div>
        <div className="banner-container flex-1  h-[350px] ">
          <div className="intro-image relative  h-full w-full">
            <Image
              src={HeroImage}
              alt="hero-image"
              width={300}
              height={400}
              quality={95}
              className="object-fill absolute w-full h-full rounded-[1rem] "
            />
          </div>
        </div>
        {/*
          <div className="club-intro">
            <div className="circle border-[0.4rem] border-blue-50 rounded-full w-[28vw] h-[28vw] flex justify-center items-center relative  ">
              <div className="content-container bg-blue-400 w-[20vw] h-[20vw] rounded-full flex justify-center items-center">
                testtesttest
              </div>
              <motion.div
                animate={timer <= 5 ? { rotate: 360 } : { rotate: 0 }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                className="features-container w-full h-full absolute  left-0 right-0 rounded-full flex justify-between"
              >
                <div className="flex flex-col justify-between">
                  <div className="feature-item w-16 h-16 rounded-full bg-white  absolute right-7 top-0 flex justify-center items-center text-3xl text-blue-400 border-blue-400 border-[0.2rem] ">
                    <RiOpenArmLine />
                  </div>
                  <div className="feature-item w-16 h-16 rounded-full bg-white absolute -right-7 top-1/2 -translate-y-1/2 flex justify-center items-center text-3xl text-blue-400 border-blue-400 border-[0.2rem] ">
                    <RiPenNibLine />
                  </div>
                  <div className="feature-item w-16 h-16 rounded-full bg-white absolute right-7 bottom-0 flex justify-center items-center text-3xl text-blue-400 border-blue-400 border-[0.2rem] ">
                    <RiBook3Line />
                  </div>
                </div>
                <div>
                  <motion.div
                    initial={{ opacity: 1, y: 0, x: 30 }}
                    transition={{ duration: 2 }}
                    animate={
                      !idea
                        ? { opacity: 1, y: 30, x: 140 }
                        : { opacity: 1, y: 0, x: 30 }
                    }
                    className="feature-item w-16 h-16 rounded-full bg-white absolute right-1/2 translate-x-1/2 -top-7 flex justify-center items-center text-3xl text-blue-400 border-blue-400 border-[0.2rem] transition "
                  >
                    <RiLightbulbFlashLine />
                  </motion.div>
                </div>
                <div className="flex flex-col justify-between relative w-full h-full">
                  <div className="feature-item w-16 h-16 rounded-full bg-white absolute left-7 top-0 flex justify-center items-center text-3xl text-blue-400 border-blue-400 border-[0.2rem] ">
                    <PiBrain />
                  </div>
                  <div className="feature-item w-16 h-16 rounded-full bg-white absolute -left-7 top-1/2 -translate-y-1/2 flex justify-center items-center text-3xl text-blue-400 border-blue-400 border-[0.2rem]">
                    <RiBardLine />
                  </div>
                  <div className="feature-item w-16 h-16 rounded-full bg-white absolute left-7 bottom-0 flex justify-center items-center text-3xl text-blue-400 border-blue-400 border-[0.2rem] ">
                    <RiFingerprintLine />
                  </div>
                  <div className="feature-item w-16 h-16 rounded-full bg-white absolute right-7 bottom-0 flex justify-center items-center text-3xl text-blue-400 border-blue-400 border-[0.2rem] ">
                    <RiFingerprintLine />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        */}
      </div>
    </section>
  );
}
