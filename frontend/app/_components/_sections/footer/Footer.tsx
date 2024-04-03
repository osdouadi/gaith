"use client";

import React from "react";
import Developer from "../developer/Developer";
import CopyRight from "../../_ui/CopyRight";
import FooterInfo from "../../_ui/FooterInfo";
import FooterContact from "../../_ui/FooterContact";
import FooterList from "../../_ui/FooterList";

export default function Footer() {
  return (
    <>
      {/*Developer /> */}
      <section className="bg-primary w-full py-10 px-6">
        <div className="flex">
          <FooterInfo />
          <FooterContact />
          <FooterList />
        </div>
        <CopyRight />
      </section>
    </>
  );
}
