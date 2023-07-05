import "./globals.css";
import Navbar from "./(components)/Navbar";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Home",
} satisfies Metadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${inter.variable} font-inter overflow-x-hidden`}>
      <body className="dark:bg-dark">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
