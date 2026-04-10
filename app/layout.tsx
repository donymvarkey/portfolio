import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dony M Varkey | Full Stack & React Native Developer",
  description:
    "Portfolio of Dony M Varkey, a software developer building polished web and cross-platform mobile experiences with React.js, Node.js, and React Native.",
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
