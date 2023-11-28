"use client";

import GoogleAnalytics from "components/tracking/GoogleAnalytics";
import Hotjar from "components/tracking/Hotjar";
import useGAPageView from "hooks/useGAPageView";
import Layout from "components/layout/Layout";
import "globals.css";
import React from "react";
import GlobalStyle from "styles/GlobalStyle";

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
        <GlobalStyle />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
