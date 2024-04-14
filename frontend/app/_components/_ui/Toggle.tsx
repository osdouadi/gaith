import React from "react";

type ToggleProps = {
  children: React.ReactNode;
  size: string;
  pressed: boolean;
  onPressedChanged: () => void;
};

function Toggle({ children, size, pressed, onPressedChanged }: ToggleProps) {
  return (
    <div onClick={onPressedChanged}>
      {children}
    </div>
  );
}

export default Toggle;
