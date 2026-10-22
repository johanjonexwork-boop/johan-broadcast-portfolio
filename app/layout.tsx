import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Johan J Jonex | Broadcast & Media Portfolio",
  description:
    "Broadcasting, live production, video, and creative portfolio of Johan J Jonex.",
  metadataBase: new URL("https://example.vercel.app")
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
