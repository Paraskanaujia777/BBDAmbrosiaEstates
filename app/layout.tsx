import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import WhatsAppFloat from "@/components/whatsAppFloat";
import { DialogProvider } from "./context/dialog-context";
import { DialogCloseButton } from "@/components/dialogForm";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BBD Ambrosia Estates | Premium 4 & 5 BHK Luxury Villas ",
  description: "Luxury Villas in BBD Green City Lucknow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <DialogProvider>
          <Header></Header>
          <DialogCloseButton></DialogCloseButton>
          {children}
          <WhatsAppFloat></WhatsAppFloat>
        </DialogProvider>
      </body>

    </html>
  );
}
