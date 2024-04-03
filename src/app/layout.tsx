import type { Metadata } from "next";
import "./globals.css";
import { inter, titleFont } from "@/config/fonts";
import { NextuiProvider } from "@/components";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextuiProvider>{children}</NextuiProvider>
      </body>
    </html>
  );
}
