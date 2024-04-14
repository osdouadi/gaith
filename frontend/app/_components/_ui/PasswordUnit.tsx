import React, { MouseEventHandler } from "react";
import { useFormContext } from "../../_hooks/useFormContext";
import { Key } from "lucide-react";
import Input from "./Input";
import StepControlButtons from "./StepControlButtons";
import Spinner from "./Spinner";

interface PasswordUnitProps {
  handlePrevStep: () => void;
  isLoading: boolean;
  handleSignup: MouseEventHandler<HTMLButtonElement>;
}

const PasswordUnit: React.FC<PasswordUnitProps> = ({
  handlePrevStep,
  isLoading,
  handleSignup,
}) => {
  const { formState, dispatch } = useFormContext();
  const { password, passwordConfirm } = formState;

  const setPassword = (value: string) => {
    dispatch({ type: "UPDATE_FIELD", field: "password", value });
  };
  const setPasswordConfirm = (value: string) => {
    dispatch({ type: "UPDATE_FIELD", field: "passwordConfirm", value });
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="pb-8 flex flex-col gap-7">
            <Input
              label="كلمة المرور"
              icon={<Key color="#999999" />}
              placeHolder="قم بكتابة كلمة مرور هنا..."
              value={password}
              setterFunction={setPassword}
            />
            <Input
              label="تأكيد كلمة المرور"
              icon={<Key color="#999999" />}
              placeHolder="قم بتأكيد كلمة المرور هنا..."
              value={passwordConfirm}
              setterFunction={setPasswordConfirm}
            />
          </div>
          <StepControlButtons
            handlePrevStep={handlePrevStep}
            handleSignup={handleSignup}
          />
        </>
      )}
    </>
  );
};

export default PasswordUnit;
