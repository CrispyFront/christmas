import Layout from "components/layout/Layout";
import GoogleAnalytics from "components/tracking/GoogleAnalytics";
import Hotjar from "components/tracking/Hotjar";
import METADATA from "constants/METADATA";
import type { Metadata } from "next";
import React, { Suspense } from "react";
import GlobalStyle from "styles/GlobalStyle";
import Loading from "./loading";

export const metadata: Metadata = {
  metadataBase: new URL("https://christmas-mocha.vercel.app"),
  title: METADATA.TITLE,
  description: METADATA.DESCRIPTION,
  openGraph: {
    title: METADATA.TITLE,
    description: METADATA.DESCRIPTION,
    url: METADATA.URL,
    siteName: METADATA.TITLE,
    images: [
      {
        url: METADATA.IMAGE,
        width: 388,
        height: 388,
      },
    ],
    locale: METADATA.LOCALE,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: METADATA.TITLE,
    description: METADATA.DESCRIPTION,
    site: METADATA.URL,
    images: [METADATA.IMAGE],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <GoogleAnalytics />
        <Hotjar />
        <GlobalStyle />
        <Suspense fallback={<Loading />}>
          <Layout>{children}</Layout>
        </Suspense>
      </body>
    </html>
  );
}
