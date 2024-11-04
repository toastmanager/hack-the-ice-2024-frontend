import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppBar from "@/components/appbar";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "PLACEHOLDER TITLE",
  description: "PLACEHOLDER DESCRIPTION",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`h-full ${inter.className} antialiased`}>
        <AppBar />
        <div className="flex justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
