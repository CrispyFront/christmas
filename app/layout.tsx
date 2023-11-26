import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christmas Test",
  description: "☃️ 크리스마스에 뭐하지?",
};

declare global {
  interface Window {
    gtag: any;
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
