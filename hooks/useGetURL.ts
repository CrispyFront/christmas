import { usePathname, useSearchParams } from "next/navigation";

function useGetURL() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const url = pathname + searchParams.toString();

  return url;
}

export default useGetURL;
