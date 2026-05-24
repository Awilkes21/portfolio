import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andrew Wilkes | Software Engineer",
  description:
    "Developer portfolio for Andrew Wilkes, focused on full-stack engineering, simulation tooling, data visualization, and developer tools."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
