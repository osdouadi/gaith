"use client";
import React from "react";
import Slogan from "../../_ui/Slogan";
import SlidesContainer from "../../_ui/SlidesContainer";

export default function Hero() {
  return (
    <section className="hero w-full p-8 lg:p-12 lx:p-12 bg-primary !pt-[7.7rem]">
      <div className="w-full flex items-center flex-col lg:flex-row xl:flex-row text-center pb-3">
        <div className="w-full flex flex-col items-center lg:flex-1 xl:flex-1 text-center space-y-3 lg:p-12 lx:p-12 mb-4 lg:mb-0 lx:mb-0">
          <p className="text-white text-base sm:text-xl sm:leading-10 md:text-xl lg:text-2xl leading-10">
            نرحب بكم في المنصة الرسمية لنادي غيث العلمي والثقافي، حيث نقدم
            لزوارنا الكرام مجموعة متنوعة من البرمجيات والخدمات لتلبية احتياجاتكم
            وتوفير تجربة مميزة.
          </p>
          <Slogan fontSize="text-base sm:text-xl lg:text-2xl xl:text-3xl" />
        </div>
        <SlidesContainer />
      </div>
    </section>
  );
}
