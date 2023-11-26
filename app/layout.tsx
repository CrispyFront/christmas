"use client";

import GoogleAnalytics from "components/tracking/GoogleAnalytics";
import Hotjar from "components/tracking/Hotjar";
import useGAPageView from "hooks/useGAPageView";
import type { Metadata } from "next";

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
