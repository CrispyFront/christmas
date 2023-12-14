import LoadingSpinner from "assets/images/LoadingSpinner.gif";
import Image from "next/image";

function Loading() {
  const StyleDiv: React.CSSProperties = {
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  };
  const StyleP: React.CSSProperties = {
    color: "#468259",
    fontSize: "2.5rem",
  };

  return (
    <div style={StyleDiv}>
      <Image src={LoadingSpinner} alt="로딩 스피너" />
      <p style={StyleP}>Loading...</p>
    </div>
  );
}

export default Loading;
