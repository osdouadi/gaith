import React from "react";

function Input({
  label,
  icon,
  placeHolder,
  name,
  value,
  setterFunction,
}: {
  label: string;
  icon: any;
  placeHolder: string;
  name?:string
  value?: string;
  setterFunction?: (value: string) => void;
}) {
  return (
    <div>
      <label
        htmlFor="name-icon"
        className="block mb-2 text-sm sm:text-lg font-medium text-gray-900"
      >
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          {icon}
        </div>
        <input
          type="text"
          id="name-icon"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg rounded-lg block w-full ps-12 p-2.5 h-12 lg:h-14"
          placeholder={placeHolder}
          name={name}
          value={value}
          onChange={(e) => setterFunction(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Input;
