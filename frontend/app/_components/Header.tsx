import Link from "next/link";
import React from "react";
import { links } from "../_lib/data";

export default function Header() {
  return (
    <div className="header w-full px-12 py-4">
      <nav className="flex justify-between items-center w-full">
        <Link href="#">دخول الأعضاء</Link>
        <ul className="flex items-center gap-10">
          {links.map((link, i) => (
            <Link key={i} href={link.href}>
              {link.title}
            </Link>
          ))}
        </ul>
        <h3>غيث</h3>
      </nav>
    </div>
  );
}
