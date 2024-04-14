import React from "react";
import { useFormContext } from "../../_hooks/useFormContext";
import { GraduationCap, School } from "lucide-react";
import Input from "./Input";
import StepControlButtons from "./StepControlButtons";

interface SpecialityInfoUnitProps {
  handleNextStep: () => void;
  handlePrevStep: () => void;
}

const SpecialityInfoUnit: React.FC<SpecialityInfoUnitProps> = ({
  handleNextStep,
  handlePrevStep,
}) => {
  const { formState, dispatch } = useFormContext();
  const { university, speciality } = formState;

  const setUniversity = (value: string) => {
    dispatch({ type: "UPDATE_FIELD", field: "university", value });
  };
  const setSpeciality = (value: string) => {
    dispatch({ type: "UPDATE_FIELD", field: "speciality", value });
  };

  return (
    <>
      <div className="pb-8 flex flex-col gap-7">
        <Input
          label="الجامعة"
          icon={<School color="#999999" />}
          placeHolder="ما هي الجامعة التي تدرس بها؟"
          value={university}
          setterFunction={setUniversity}
        />
        <Input
          label="التخصص الدراسي"
          icon={<GraduationCap color="#999999" />}
          placeHolder="ماهو تخصصك الدراسي؟"
          value={speciality}
          setterFunction={setSpeciality}
        />
      </div>
      <StepControlButtons
        handlePrevStep={handlePrevStep}
        handleNextStep={handleNextStep}
      />
    </>
  );
};

export default SpecialityInfoUnit;
