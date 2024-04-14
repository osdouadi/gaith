import React from "react";
import { useFormContext } from "../../_hooks/useFormContext";
import StepControlButtons from "./StepControlButtons";
import Input from "./Input";
import { UserRound } from "lucide-react";

interface PersonalInfoUnitProps {
  handleNextStep: () => void;
  handlePrevStep: () => void;
}

const PersonalInfoUnit: React.FC<PersonalInfoUnitProps> = ({
  handleNextStep,
  handlePrevStep,
}) => {
  const { formState, dispatch } = useFormContext();
  const { firstName, lastName } = formState;

  const setFirstName = (value: string) => {
    dispatch({ type: "UPDATE_FIELD", field: "firstName", value });
  };
  const setLastName = (value: string) => {
    dispatch({ type: "UPDATE_FIELD", field: "lastName", value });
  };

  return (
    <>
      <div className="pb-8 flex flex-col gap-7">
        <Input
          label="الإسم"
          icon={<UserRound color="#999999" />}
          placeHolder="قم بكاتبة إسمك هنا..."
          value={firstName}
          setterFunction={setFirstName}
        />
        <Input
          label="اللقب"
          icon={<UserRound color="#999999" />}
          placeHolder="قم بكاتبة لقبك هنا..."
          value={lastName}
          setterFunction={setLastName}
        />
      </div>
      <StepControlButtons
        handlePrevStep={handlePrevStep}
        handleNextStep={handleNextStep}
      />
    </>
  );
};

export default PersonalInfoUnit;
