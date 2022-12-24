/* eslint-disable @next/next/no-head-element */
import "./globals.css";
import Navbar from "./Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="overflow-x-hidden">
      <head></head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
