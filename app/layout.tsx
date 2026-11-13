import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bayu Saputra | Portfolio",
  description: "Personal portfolio — graphic design, visual identity, and photography.",

  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
