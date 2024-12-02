import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "몽고디비공부",
  description: "mongoose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
