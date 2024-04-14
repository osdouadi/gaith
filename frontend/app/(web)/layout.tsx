import React from "react";
import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./../globals.css";
import "./../globals.scss";
import Header from "../_components/_sections/header/Header";
import Footer from "../_components/_sections/footer/Footer";

const tajwal = Tajawal({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className={tajwal.className}>
            <Header />
            {children}
            <Footer />
      </body>
    </html>
  );
}