import { Permanent_Marker } from "next/font/google";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--marker"
});

const work = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--work"
});

export const metadata = {
  title: "Mixtape | Scott Kenneth Jackson",
  description: "...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${marker.variable} marker ${work.variable} work`}>{children}</body>
    </html>
  );
};
