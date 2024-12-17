import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/header";
import HeaderMobile from "../components/header_mobile";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const antonioFont = localFont({
  src: "./fonts/Antonio-VariableFont_wght.ttf",
  variable: "--font-antonio",
  weight: "100 900",
});

const spartaFont = localFont({
  src: "./fonts/LeagueSpartan-VariableFont_wght.ttf",
  variable: "--font-sparta",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Planets Fact Site",
    default: "Planets Fact Site",
  },
  description: "about planets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${antonioFont.variable} ${spartaFont.variable} flex min-h-screen w-full flex-col font-Sparta antialiased`}
      >
        <Header />
        <HeaderMobile />
        <main className="flex flex-1">{children}</main>
      </body>
    </html>
  );
}
