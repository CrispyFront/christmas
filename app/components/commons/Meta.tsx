import METADATA from "constants/METADATA";

function Meta() {
  return (
    <>
      {/* HTML Meta Tags */}
      <title>{METADATA.TITLE}</title>
      <meta name="description" content={METADATA.DESCRIPTION} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Facebook Meta Tags */}
      <meta property="og:url" content={METADATA.URL} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={METADATA.TITLE} />
      <meta property="og:title" content={METADATA.TITLE} />
      <meta property="og:description" content={METADATA.DESCRIPTION} />
      <meta property="og:image" content={METADATA.IMAGE} />
      {/*  Twitter Meta Tags  */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={METADATA.URL} />
      <meta name="twitter:title" content={METADATA.TITLE} />
      <meta name="twitter:description" content={METADATA.DESCRIPTION} />
      <meta name="twitter:image" content={METADATA.IMAGE} />
    </>
  );
}

export default Meta;
