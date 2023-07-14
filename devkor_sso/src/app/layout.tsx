import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";
import { Nanum_Gothic } from "next/font/google";
export const metadata: Metadata = {
  title: "Devkor SSO",
  description: "Single Sign On page of Devkor",
};

const nanumGothic = Nanum_Gothic({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nanumGothic.className}>{children}</body>
    </html>
  );
}
