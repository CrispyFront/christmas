import { pageview } from "@/libs/gtag";
import { useRouter } from "next/router";
import { useEffect } from "react";

function useGAPageView() {
  const router = useRouter();
  
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
}

export default useGAPageView;
