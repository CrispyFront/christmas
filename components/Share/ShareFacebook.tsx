import { BASE_URL } from "constants/url";

//TODO: 페이스북 버튼 커스텀 이미지 넣기
function ShareFacebook() {
  const handleClick = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${BASE_URL}`);
  };

  return <button onClick={handleClick}>페이스북 공유하기</button>;
}

export default ShareFacebook;
