import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import Settings from '../config/settings.json'

const prime = Plus_Jakarta_Sans({
  variable: "--font-prime",
  subsets: ["latin"],
});

const sec = Plus_Jakarta_Sans({
  variable: "--font-sec",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: Settings.title,
  description: Settings.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${prime.variable} ${sec.variable}`}>
        {children}
      </body>
    </html>
  );
}
