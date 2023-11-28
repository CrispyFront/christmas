"use client";

import "globals.css";
import React from "react";
import Layout from "../components/layout/Layout";
import GoogleAnalytics from "../components/tracking/GoogleAnalytics";
import Hotjar from "../components/tracking/Hotjar";
import useGAPageView from "../hooks/useGAPageView";
import GlobalStyle from "../styles/GlobalStyle";

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
