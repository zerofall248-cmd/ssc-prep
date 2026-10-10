import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SSC Prep — Prepare with purpose",
    template: "%s | SSC Prep",
  },
  description:
    "Explore SSC exam categories, focused practice sets and study resources in one preparation space.",
  applicationName: "SSC Prep",
  keywords: [
    "SSC CGL",
    "SSC CHSL",
    "SSC MTS",
    "SSC GD",
    "government exam preparation",
    "practice tests",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f6f1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
