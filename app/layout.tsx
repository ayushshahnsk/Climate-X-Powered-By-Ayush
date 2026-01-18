import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Climate X - Powered By Ayush",
  description: "Weather app built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}