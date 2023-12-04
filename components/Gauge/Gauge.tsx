import empty from "assets/icons/heart/empty.svg";
import full from "assets/icons/heart/full.svg";
import half from "assets/icons/heart/half.svg";
import Image from "next/image";

interface HeartState {
  type: "empty" | "half" | "full";
}

function Gauge({ type }: HeartState) {
  const HeartImg: { [State in HeartState["type"]]: string } = {
    empty: empty,
    half: half,
    full: full,
  };

  return <Image src={HeartImg[type]} alt="하트" />;
}

export default Gauge;
