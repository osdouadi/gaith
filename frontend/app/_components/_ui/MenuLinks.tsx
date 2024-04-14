"use client";

import React from "react";
import Link from "next/link";
import { links } from "../../_lib/data";

function MenuLinks() {
  return (
    <ul className="flex flex-col mt-4 font-medium lg:flex-row gap-5 lg:mt-0">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className="block py-2 pr-4 pl-3 text-white lg:text-xl rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 hover:text-yellow-300 transition">
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MenuLinks;
