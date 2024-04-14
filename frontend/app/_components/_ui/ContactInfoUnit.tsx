import React from "react";
import { useFormContext } from "../../_hooks/useFormContext";
import { Mail, Phone } from "lucide-react";
import Input from "./Input";
import StepControlButtons from "./StepControlButtons";

interface ContactInfoUnitProps {
  handleNextStep: () => void;
  handlePrevStep: () => void;
}

const ContactInfoUnit: React.FC<ContactInfoUnitProps> = ({
  handleNextStep,
  handlePrevStep,
}) => {
  const { formState, dispatch } = useFormContext();
  const { email, phone } = formState;

  const setEmail = (value: string) => {
    dispatch({ type: "UPDATE_FIELD", field: "email", value });
  };
  const setPhone = (value: string) => {
    dispatch({ type: "UPDATE_FIELD", field: "phone", value });
  };

  return (
    <>
      <div className="pb-8 flex flex-col gap-7">
        <Input
          label="البريد الإلكتروني"
          icon={<Mail color="#999999" />}
          placeHolder="قم بكتابة بريدك الإلكتروني هنا..."
          value={email}
          setterFunction={setEmail}
        />
        <Input
          label="رقم الهاتف"
          icon={<Phone color="#999999" />}
          placeHolder="قم بكتابة رقم هاتفك هنا..."
          value={phone}
          setterFunction={setPhone}
        />
      </div>
      <StepControlButtons
        handlePrevStep={handlePrevStep}
        handleNextStep={handleNextStep}
      />
    </>
  );
};

export default ContactInfoUnit;
