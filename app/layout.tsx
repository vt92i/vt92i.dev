import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "vt92i.dev",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
