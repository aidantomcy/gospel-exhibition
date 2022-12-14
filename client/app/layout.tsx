/* eslint-disable @next/next/no-head-element */
import "./globals.css";
import Navbar from "./Navbar";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${inter.variable} font-inter overflow-x-hidden`}>
      <head></head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
