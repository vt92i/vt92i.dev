import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Just An Ordinary Person",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} container mx-auto flex min-h-screen select-none flex-col bg-stone-950 p-4 font-inter font-light tracking-widest antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
