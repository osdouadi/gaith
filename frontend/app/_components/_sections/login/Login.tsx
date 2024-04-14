"use client";

import React, { useState } from "react";
import Image from "next/image";
import MembershipImage from "/public/images/membership.svg";
import Slogan from "../../_ui/Slogan";
import MembershipImageSecond from "/public/images/login.svg";
import AdminLoginTab from "../../_ui/AdminLoginTab";
import MemberLoginTab from "../../_ui/MemberLoginTab";

function Login() {
  const [adminLoginTab, setAdminLoginTab] = useState(false);
  const [memberLoginTab, setMemberLoginTab] = useState(false);

  const handleAdminLoginTab = () => {
    setAdminLoginTab(true);
  };
  const handleMemberLoginTab = () => {
    setMemberLoginTab(true);
  };

  const handleReturnBack = () => {
    setAdminLoginTab(false);
    setMemberLoginTab(false);
  };

  return (
    <div className="grid grid-cols-2">
      <div className="p-16 min-h-[40rem] relative">
        <div>
          {adminLoginTab && !memberLoginTab ? (
            <h1 className="membership-title text-bold text-[2rem] text-primary text-center mb-8">
              دخول المسؤوليين
            </h1>
          ) : memberLoginTab && !adminLoginTab ? (
            <h1 className="membership-title text-bold text-[2rem] text-primary text-center mb-8">
              دخول أعضاء النادي
            </h1>
          ) : (
            <h1 className="membership-title text-bold text-[2rem] text-primary text-center mb-8">
              تسجيل الدخول لمنصة غيث
            </h1>
          )}
          {adminLoginTab ? (
            <p className="text-bold text-2xl text-black text-center text-relaxed pb-8">
              لو سمحت قم بإدخال المعلومات التالية من أجل تسجيل الدخول كمسؤول في
              منصة غيث
            </p>
          ) : memberLoginTab ? (
            <p className="text-bold text-2xl text-black text-center text-relaxed pb-8">
              لو سمحت قم بإدخال المعلومات التالية من أجل تسجيل الدخول كعضو في
              منصة غيث
            </p>
          ) : (
            <p className="text-bold text-2xl text-black text-center text-relaxed pb-8">
              مرحبًا بك في منصة غيث، هنا يمكنك تسجيل الدخول كعضو أو كمسؤول في
              النادي
            </p>
          )}

          <div className="flex justify-center gap-5">
            {!adminLoginTab && !memberLoginTab && (
              <>
                <button
                  className="bg-primary text-white py-3 text-lg rounded-lg w-1/2 flex items-center justify-center gap-3"
                  onClick={handleMemberLoginTab}
                >
                  دخول الأعضاء
                </button>
                <button
                  className="bg-primary text-white py-3 text-lg rounded-lg w-1/2 flex items-center justify-center gap-3"
                  onClick={handleAdminLoginTab}
                >
                  دخول المسؤوليين
                </button>
              </>
            )}
            {adminLoginTab && (
              <AdminLoginTab handleReturnBack={handleReturnBack} />
            )}
            {memberLoginTab && (
              <MemberLoginTab handleReturnBack={handleReturnBack} />
            )}
          </div>
        </div>
        {!adminLoginTab && !memberLoginTab && (
          <div className="absolute bottom-0 right-1/2 translate-x-1/2">
            <Image
              src={MembershipImageSecond}
              alt="memebrship"
              width={450}
              height={450}
              className="mb-4"
            />
          </div>
        )}
      </div>

      <div className="bg-gradient-to-b from-[#c63434]/95 via-[#bb3737] to-[#a72b2b bg-red-300 flex flex-col items-center p-6 ">
        <Image
          src={MembershipImage}
          alt="memebrship"
          width={500}
          height={500}
          className="mb-5"
        />
        <p className="text-white text-xl pb-5">إنضمامكم لعائلة غيث شرف لنا</p>
        <Slogan fontSize="text-[2rem]" />
      </div>
    </div>
  );
}

export default Login;
