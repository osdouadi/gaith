"use client";

import { createContext, useContext, useReducer } from "react";

interface FormState {
  currentStep: number;
  firstName: string;
  lastName: string;
  university: string;
  speciality: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirm: string;
}

type FormAction =
  | { type: "UPDATE_FIELD"; field: string; value: string }
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" };

const initialFormState: FormState = {
  currentStep: 1,
  firstName: "",
  lastName: "",
  university: "",
  speciality: "",
  email: "",
  phone: "",
  password: "",
  passwordConfirm: "",
};

const formReducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "NEXT_STEP":
      return { ...state, currentStep: state.currentStep + 1 };
    case "PREV_STEP":
      return { ...state, currentStep: state.currentStep - 1 };
    default:
      return state;
  }
};

const FormContext = createContext<{
  formState: FormState;
  dispatch: React.Dispatch<FormAction>;
}>({
  formState: initialFormState,
  dispatch: () => {},
});

export const useFormContext = () => useContext(FormContext);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  return (
    <FormContext.Provider value={{ formState, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};
