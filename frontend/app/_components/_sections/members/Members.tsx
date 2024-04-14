"use client";

import React from "react";
import SectionTitle from "../../_ui/SectionTitle";
import MemberCard from "../../_ui/MemberCard";
import { motion } from "framer-motion";
import Button from "../../_ui/Button";

function Members() {
  return (
    <section className="bg-primary py-12 px-6">
      <SectionTitle title="أعضاء نادي غيث" textColor="text-white" />
      <div className="container flex flex-col-reverse lg:flex-row xl:flex-row items-center justify-between">
        <div className="lg:w-1/2 xl:w-1/2 flex flex-col pl-4">
          <div className="text-white text-4xl font-bold pb-5">
            <h3>فريقنا</h3>
          </div>
          <div className="text-white text-xl leading-relaxed pb-5">
            <p>
              .نادي غيث يقرب بين الطلاب الجامعين, معا نبني جسور إخاء مشتركة و
              نمسك بيد الطالب في طريق النهضة و التطور
              <br />
              نادي غيث فكرة و الفكرة لا تموت ابدا بحث جمعنا اعضاءا من مختلف
              التخصصات الجامعية تربطهم روابط مشتركة و اهداف و غايات و طموحات
              واحدة روح الاخوى و القرابة و كل شيء.
            </p>
          </div>
          <div>
            <Button type="btn-lg" color="btn-white">
              إنضام للنادي الآن
            </Button>
          </div>
        </div>
        <div className="flex lg:w-1/2 xl:w-1/2 gap-6">
          <motion.div
            className="flex flex-col w-full gap-6"
            initial={{ y: 20 }}
          >
            <MemberCard />
            <MemberCard />
          </motion.div>
          <motion.div
            className="flex flex-col w-full gap-6"
            initial={{ y: -20 }}
          >
            <MemberCard />
            <MemberCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Members;
