import React from "react";
import Signup from "../../_components/_sections/signup/Signup";
import { FormProvider } from "../../_hooks/useFormContext";

function page() {
  return (
    <div>
      <FormProvider>
        <Signup />
      </FormProvider>
    </div>
  );
}

export default page;
