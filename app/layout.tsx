import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Tomisin Balogun",
  description: "Tomisin Balogun | Frontend Engineer specializing in React, Next.js, and creating scalable web solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
