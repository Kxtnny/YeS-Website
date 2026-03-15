import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const siteUrl = "https://joinyes.net";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "YeS",
  description: "Young Entrepreneurs of Singapore",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "YeS - Young Entrepreneurs of Singapore",
    description: "Young Entrepreneurs of Singapore",
    images: [{ url: "/yes-logo.png", alt: "Young Entrepreneurs of Singapore" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "YeS – Young Entrepreneurs of Singapore",
    description: "Young Entrepreneurs of Singapore",
    images: ["/yes-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
