/**
 * Warp Development Assessment
 *
 * (c) Delvian Valentine <https://delvianv.github.io>
 */

import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Link from "next/link";

import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Warp Assessment",
  description: "Warp Development Assessment",
  authors: [{ name: "Delvian Valentine", url: "https://delvianv.github.io" }],
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} antialiased min-h-screen flex flex-col bg-base-300 text-base-content`}
      >
        <header className="navbar bg-neutral text-neutral-content">
          <Link href="/" className="btn btn-ghost text-xl">
            Warp Development Assessment
          </Link>
        </header>

        <main className="flex-grow mx-auto p-6">{children}</main>

        <footer className="footer footer-center bg-base-300 text-base-content p-4">
          <aside>
            <p>
              &copy;&nbsp;
              <a href="https://delvianv.github.io" className="link">
                Delvian Valentine
              </a>
            </p>
          </aside>
        </footer>
      </body>
    </html>
  );
}
