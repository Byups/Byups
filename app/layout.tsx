import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bayu Saputra | Portfolio",
  description: "Personal portfolio — graphic design, visual identity, and photography.",
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
