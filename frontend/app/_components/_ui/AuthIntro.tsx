import React, { MouseEventHandler } from "react";

function AuthIntro({
  handleNextStep,
}: {
  handleNextStep: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div>
      <form className="max-w-sm mx-auto flex flex-col gap-5 mt-7">
        <button
          className="bg-primary text-white py-4 text-lg rounded-lg"
          onClick={handleNextStep}
        >
          إستمرار
        </button>
      </form>
    </div>
  );
}

export default AuthIntro;
