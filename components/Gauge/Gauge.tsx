import empty from "assets/icons/EmptyHeart.svg";
import full from "assets/icons/FullHeart.svg";
import half from "assets/icons/HalfHeart.svg";
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

  return <Image src={HeartImg[type]} alt="게이지 상태" />;
}

export default Gauge;
