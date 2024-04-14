import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import React, { MouseEventHandler } from "react";

function StepControlButtons({
  handlePrevStep,
  handleNextStep,
  handleSignup,
}: {
  handlePrevStep: () => void;
  handleNextStep?: () => void;
  handleSignup?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div className="flex justify-center gap-5">
      <button
        className="bg-primary text-white py-3 text-lg rounded-lg w-1/2 flex items-center justify-center gap-3"
        onClick={handlePrevStep}
      >
        <ArrowRight />
        عودة
      </button>
      {handleNextStep && (
        <button
          className="bg-primary text-white py-3 text-lg rounded-lg w-1/2 flex items-center justify-center gap-3"
          onClick={handleNextStep}
        >
          إستمرار
          <ArrowLeft />
        </button>
      )}
      {handleSignup && (
        <button
          className="bg-primary text-white py-3 text-lg rounded-lg w-1/2 flex items-center justify-center gap-3"
          onClick={handleSignup}
        >
          تسجيل
          <Check />
        </button>
      )}
    </div>
  );
}

export default StepControlButtons;
