import empty from "assets/icons/EmptyHeart.svg";
import full from "assets/icons/FullHeart.svg";
import half from "assets/icons/HalfHeart.svg";
import Image from "next/image";
import styled from "styled-components";

interface HeartState {
  type: "empty" | "half" | "full";
}

function Gauge({ type }: HeartState) {
  const HeartImg: { [State in HeartState["type"]]: string } = {
    empty: empty,
    half: half,
    full: full,
  };

  return (
    <StyledGauge
      width={58}
      height={56}
      src={HeartImg[type]}
      alt="게이지 상태"
    />
  );
}

export default Gauge;

const StyledGauge = styled(Image)`
  @media (max-width: 420px) {
    width: 48px;
    height: 46px;
  }
`;
