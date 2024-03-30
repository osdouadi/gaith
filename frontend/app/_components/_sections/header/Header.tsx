import Link from "next/link";
import React from "react";
import { links } from "../../../_lib/data";
import Logo from "../../_ui/Logo";

export default function Header() {
  return (
    <div className="header w-full bg-primary py-6 px-12">
      <nav className="nav-menu w-full">
        <Logo />
        <ul className="flex items-center gap-10 list-items">
          {links.map((link, i) => (
            <Link key={i} href={link.href} className="menu-link">
              {link.title}
            </Link>
          ))}
        </ul>
        <div className="action-links">
          <Link href={"#"} className="menu-link">
            دخول الأعضاء
          </Link>
          <Link href={"#"} className=" menu-link">
            إنضمام للنادي
          </Link>
        </div>
      </nav>
    </div>
  );
}
