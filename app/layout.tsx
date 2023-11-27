"use client";

import GoogleAnalytics from "components/tracking/GoogleAnalytics";
import Hotjar from "components/tracking/Hotjar";
import useGAPageView from "hooks/useGAPageView";
import React from "react";        


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
