/**
 * Warp
 *
 * Show basic weather information in real-time
 *
 * (c) Delvian Valentine <https://delvianv.github.io>
 */

import type { Metadata } from "next";

import Footer from "./ui/containers/Footer";
import Header from "./ui/containers/Header";
import { nunito } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Warp",
  description: "Show basic weather information in real-time",
  authors: [{ name: "Delvian Valentine", url: "https://delvianv.github.io" }],
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} antialiased flex flex-col min-h-screen bg-base-300`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
