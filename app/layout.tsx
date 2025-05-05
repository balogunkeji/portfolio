import type { Metadata } from "next";
import {PageLayout} from "../components/pageLayout";
import "./globals.css";
import GlobalCursorFollow from "../components/cursor";
import React from "react";




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
      <GlobalCursorFollow/>
      <PageLayout>
          {children}
      </PageLayout>
      </body>
    </html>
  );
}
