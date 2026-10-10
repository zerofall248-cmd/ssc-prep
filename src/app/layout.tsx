import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SSC Prep — Prepare with purpose",
    template: "%s | SSC Prep",
  },
  description:
    "Explore SSC exam categories and sample preparation ideas in a focused study portal.",
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
  themeColor: "#efedff",
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
