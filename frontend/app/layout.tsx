import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import TanstackProvider from "./_providers/TanstackProvider";

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
        <TanstackProvider>
          <Header />
          {children}
          <Footer />
        </TanstackProvider>
      </body>
    </html>
  );
}
