import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recurring Picker",
  description: "Pick recurring dates easily",
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
