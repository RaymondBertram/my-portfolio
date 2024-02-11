import type { Metadata } from "next";
import { pt_sans } from "./fonts";
import "./globals.scss";



export const metadata: Metadata = {
  title: "Raymond Bertram",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pt_sans.className}>{children}</body>
    </html>
  );
}
