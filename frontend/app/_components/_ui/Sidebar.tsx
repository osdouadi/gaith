"use client";

import React, { useEffect, useState } from "react";
import IconBox from "./../_ui/IconBox";
import { ChevronsLeft, Crown } from "lucide-react";
import cn from "classnames";
import { motion, useAnimation } from "framer-motion";
import MenuItems from "./MenuItems";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const controls = useAnimation();

  const handleSidebarCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const sidebarVariants = {
    collapsed: {
      width: "6rem",
    },
    expanded: {
      width: "25%",
    },
  };

  const transition = {
    type: "spring",
    stiffness: 500,
    damping: 30,
  };

  const animateSidebar = () => {
    controls.start(isCollapsed ? "collapsed" : "expanded");
  };

  useEffect(() => {
    animateSidebar();
  }, [isCollapsed]);

  return (
    <motion.div
      className="min-h-screen w-[25%] pt-[4rem] flex flex-col items-center relative pb-8 bg-black"
      initial={false}
      animate={controls}
      variants={sidebarVariants}
      transition={transition}
    >
      <motion.div
        className="bg-white w-[3rem] rounded-full absolute top-5 right-2 cursor-pointer flex justify-center items-center"
        onClick={handleSidebarCollapse}
        initial={{ rotate: 0 }}
        animate={isCollapsed ? { rotate: 180 } : { rotate: 0 }}
        transition={{ duration: 0.4 }}
      >
        <ChevronsLeft color="black" />
      </motion.div>
      <div className="logo flex items-center gap-4">
        <IconBox
          icon={<Crown color="black" size={22} />}
          backgroundColor="WHITE"
        />
        {isCollapsed ? null : <h1 className="text-slate-100">VISIPANEL</h1>}
      </div>
      <div className="pt-12">
        <MenuItems isCollapsed={isCollapsed} />
      </div>
    </motion.div>
  );
}

export default Sidebar;
