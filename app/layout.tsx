"use client";

import GoogleAnalytics from "GoogleAnalytics";
import Hotjar from "Hotjar";
import type { Metadata } from "next";
import useGAPageView from "hooks/useGAPageView";

export const metadata: Metadata = {
  title: "Christmas Test",
  description: "☃️ 크리스마스에 뭐하지?",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useGAPageView();

  return (
    <html lang="ko">
      <body>
        <GoogleAnalytics />
        <Hotjar />
        {children}
      </body>
    </html>
  );
}
