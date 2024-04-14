import Link from "next/link";
import React from "react";

function ActionLinks() {
  return (
    <div className="action-links !lg:flex !xl:flex ">
      <Link href={"#"} className="menu-link">
        دخول الأعضاء
      </Link>
      <Link href={"#"} className="menu-link">
        إنضمام للنادي
      </Link>
    </div>
  );
}

export default ActionLinks;
