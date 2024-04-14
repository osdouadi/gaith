import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href="https://flowbite.com" className="flex items-center">
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
        Flowbite
      </span>
    </Link>
  );
}

export default Logo;
