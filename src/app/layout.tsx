import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Random Color Background",
  description: "A website that changes background color on button click",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-transition">{children}</body>
    </html>
  );
}