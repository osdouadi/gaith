import Image from "next/image";
import React from "react";
import Member from "/public/images/member.jpg";
import Logo from "./Logo";

function MemberCard({ photo, name, speciality, joinedAt }) {
  return (
    <div className="bg-white rounded-3xl h-[20rem] flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute top-5 right-5 font-bold text-lg text-red-300">
        <span>قائد</span>
      </div>
      <div className="absolute top-5 left-5">
        <Logo textColor="text-primary" type="cardLogo" />
      </div>
      <Image
        src={Member}
        alt="member"
        width={1000}
        height={1000}
        className="rounded-full w-1/2 h-1/2 mb-3"
      />
      <div className="pb-1">
        <h3 className="text-black font-semibold text-xl">
          احمد ضياء الدين محاد
        </h3>
      </div>
      <div>
        <p>ماستر ادب عربي</p>
        <div className="absolute -bottom-4 -left-4 w-[5rem] h-[5rem]">
          <div className="member-speciality"></div>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
