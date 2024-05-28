import { Permanent_Marker, Poppins, Work_Sans } from "next/font/google";
import "./globals.css";

const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--marker"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--poppins"
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
    <html lang="en" className="bg-darkgrey">
      <body className={`${marker.variable} marker ${poppins.variable} poppins ${work.variable} work`}>{children}</body>
    </html>
  );
};
