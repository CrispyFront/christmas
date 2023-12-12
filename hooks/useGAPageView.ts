"use client";

import { pageview } from "libs/gtag";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

function useGAPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (searchParams === null) return;

  useEffect(() => {
    const url = pathname + searchParams.toString();
    pageview(url);
  }, [pathname, searchParams]);
}

export default useGAPageView;
