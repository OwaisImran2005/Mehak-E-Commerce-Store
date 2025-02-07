// "use client"

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";



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
const poppins = localFont({
  src: "./fonts/Poppins-Medium.ttf",
  variable: "--font-poppins-med",
  weight: "100 900",
});
const fireSans = localFont({
  src: "./fonts/FiraSans-Medium.ttf",
  variable: "--font-fire-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mehak",
  description: "A modern e-commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fireSans.variable} ${poppins.variable} antialiased`}>




          <Header />
          {children}
          <Footer />
       
     
        

      </body>
    </html>
  );
}
