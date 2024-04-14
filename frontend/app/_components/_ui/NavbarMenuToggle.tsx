import { AlignRight, CopyX } from "lucide-react";
import React from "react";

type ToggleMenuType = () => void;

interface NavbarMenuToggleProps {
  toggleMenu: ToggleMenuType;
  isMenuOpen: boolean;
}

const NavbarMenuToggle: React.FC<NavbarMenuToggleProps> = ({
  toggleMenu,
  isMenuOpen,
}) => {
  return (
    <div className="lg:hidden xl:hidden text-white z-40" onClick={toggleMenu}>
      {isMenuOpen ? <CopyX /> : <AlignRight />}
    </div>
  );
};

export default NavbarMenuToggle;
