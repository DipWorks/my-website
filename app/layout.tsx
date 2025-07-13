import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Theme } from "@radix-ui/themes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Analytics from "./analytics";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dipendra Bhandari",
    template: "%s - Dipendra Bhandari",
  },
  description:
    "I am a Senior Software Engineer, I write about software Engineering and life in general.",
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="bumblebee">
      <head>
        <Analytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme>
          <Header />
          <Navbar />
          <div className="h-[75vh] overflow-y-auto rounded pl-4">
            <main>{children}</main>
          </div>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
