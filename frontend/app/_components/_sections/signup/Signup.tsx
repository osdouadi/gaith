"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useFormContext } from "../../../_hooks/useFormContext";
import MembershipImage from "/public/images/membership.svg";
import Slogan from "../../_ui/Slogan";
import CurrentStepChecker from "../../_ui/CurrentStepChecker";
import { useSign } from "../../../_hooks/useSignup";

function Signup() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const {signup, error, isLoading} = useSign()
    const { formState } = useFormContext();

    const {
      firstName,
      lastName,
      university,
      speciality,
      email,
      phone,
      password,
      passwordConfirm,
    } = formState;

  const handleSignup = async (e) => {
   e.preventDefault()
   
   await signup(
     firstName,
     lastName,
     university,
     speciality,
     email,
     phone,
     password,
     passwordConfirm
   );
  };

  return (
    <div className="grid grid-cols-2">
      <div className="p-16 min-h-[40rem] relative">
        {isAuthenticated && currentStep === 6 ? (
          <p>Success</p>
        ) : (
          <div>
            <h1 className="membership-title text-bold text-[2rem] text-primary text-center mb-8">
              إنضمام لنادي غيث
            </h1>
            {isLoading ? (
              <p className="text-bold text-2xl text-black text-center text-relaxed">
                يُرجى الانتظار قليلًا، يتم حاليًا العمل على معالجة طلب انضمامكم
                إلى نادي غيث!{" "}
              </p>
            ) : (
              <p className="text-bold text-2xl text-black text-center text-relaxed pb-8">
                يمكنكم الإنضمام لنادي غيث عن طريق ملئ المعلومات التالية بالشكل
                الصحيح, بعدها مباشرة يصبح لديكم عضوية في نادي غيث
              </p>
            )}
            <CurrentStepChecker
              handleSignup={handleSignup}
              isLoading={isLoading}
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

export default Signup;
