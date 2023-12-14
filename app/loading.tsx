import LoadingSpinner from "assets/images/LoadingSpinner.gif";
import LoadingText from "assets/images/Loading.png";
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

  return (
    <div style={StyleDiv}>
      <Image width={150} height={150} src={LoadingSpinner} alt="로딩 스피너" />
      <Image width={150} height={150} src={LoadingText} alt="로딩 중" />
    </div>
  );
}

export default Loading;
