import "./globals.css";
import { Inter } from "next/font/google";

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
      <body className="dark:bg-dark-primary">{children}</body>
    </html>
  );
}
