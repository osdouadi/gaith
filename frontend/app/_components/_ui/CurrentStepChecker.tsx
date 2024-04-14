import React, { MouseEventHandler } from "react";
import Image from "next/image";
import { useFormContext } from "../../_hooks/useFormContext";
import PersonalInfoUnit from "./PersonalInfoUnit";
import AuthIntro from "./AuthIntro";
import SpecialityInfoUnit from "./SpecialityInfoUnit";
import ContactInfoUnit from "./ContactInfoUnit";
import PasswordUnit from "./PasswordUnit";
import MembershipImageSecond from "/public/images/membership-02.svg";

function CurrentStepChecker({
  handleSignup,
  isLoading,
}: {
  handleSignup: MouseEventHandler<HTMLButtonElement>;
  isLoading: boolean;
}) {
  const { formState, dispatch } = useFormContext();

  const handleNextStep = () => {
    dispatch({ type: "NEXT_STEP" });
  };

  const handlePrevStep = () => {
    dispatch({ type: "PREV_STEP" });
  };

  return (
    <div>
      {formState.currentStep === 1 ? (
        <AuthIntro handleNextStep={handleNextStep} />
      ) : formState.currentStep === 2 ? (
        <div>
          <PersonalInfoUnit
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        </div>
      ) : formState.currentStep === 3 ? (
        <div>
          <SpecialityInfoUnit
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        </div>
      ) : formState.currentStep === 4 ? (
        <div>
          <ContactInfoUnit
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        </div>
      ) : (
        <div>
          <PasswordUnit
            handlePrevStep={handlePrevStep}
            handleSignup={handleSignup}
            isLoading={isLoading}
          />
        </div>
      )}
      {formState.currentStep === 1 && (
        <div className="absolute bottom-0 right-1/2 translate-x-1/2">
          <Image
            src={MembershipImageSecond}
            alt="memebrship"
            width={450}
            height={450}
            className="mb-5"
          />
        </div>
      )}
    </div>
  );
}

export default CurrentStepChecker;
