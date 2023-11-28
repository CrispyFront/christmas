"use client";

import Meta from "components/commons/Meta";
import Layout from "components/layout/Layout";
import GoogleAnalytics from "components/tracking/GoogleAnalytics";
import Hotjar from "components/tracking/Hotjar";
import useGAPageView from "hooks/useGAPageView";
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
      <head>
        <Meta />
      </head>
      <body>
        <GoogleAnalytics />
        <Hotjar />
        <GlobalStyle />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
