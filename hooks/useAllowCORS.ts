function useAllowCORS(req: Request) {
  const newHeaders = new Headers(req.headers);
  newHeaders.set("Access-Control-Allow-Origin", "*");
  newHeaders.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  newHeaders.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return newHeaders;
}

export default useAllowCORS;
