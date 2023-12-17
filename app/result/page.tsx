"use client";

import { TEST_RESULT } from "@/constants/result";
import { testMap } from "app/test/TestResult";
import Return from "components/Button/Return";
import ShareButtons from "components/Share/ShareButtons";
import CategoryByType from "components/Text/CategoryByType";
import useGetURL from "hooks/useGetURL";
import Image from "next/image";
import { styled } from "styled-components";

function Result() {
  const url = useGetURL();

  let result = "";
  if (testMap.get("I")! > testMap.get("E")!) {
    result += "I";
  } else {
    result += "E";
  }
  if (testMap.get("N")! > testMap.get("S")!) {
    result += "N";
  } else {
    result += "S";
  }
  if (testMap.get("F")! > testMap.get("T")!) {
    result += "F";
  } else {
    result += "T";
  }
  if (testMap.get("P")! > testMap.get("J")!) {
    result += "P";
  } else {
    result += "J";
  }

  const resultObject = TEST_RESULT.filter((val) => val.mbti === result);

  return (
    <StyledWrapper>
      <StyledHeader>
        <p>
          <span>크리스마스</span>에 뭐하지?
        </p>
      </StyledHeader>
      <StyledResult>
        <StyledResultImg
          width={410}
          height={220}
          src={resultObject[0].img}
          alt="메인아이콘"
        />
        <StyledTitle>{resultObject[0].title}</StyledTitle>
        <StyledSubTitle>{resultObject[0].subTitle}</StyledSubTitle>
        <StyledContent>{resultObject[0].content}</StyledContent>
        <StyledCategoryWrapper>
          <CategoryByType
            title="같이 보낼 유형"
            character={resultObject[0].equalMbti1}
          />
          <CategoryByType
            title="보내면 안될 유형"
            character={resultObject[0].notEqualMbti}
          />
        </StyledCategoryWrapper>
      </StyledResult>
      <StyledButtonWrapper>
        <ShareButtons url={url} />
        <StyledReturnWrapper>
          <Return title="다시하기" link="/" />
          <Return title="모든 결과 보기" link="/all" />
        </StyledReturnWrapper>
      </StyledButtonWrapper>
    </StyledWrapper>
  );
}

export default Result;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeader = styled.div`
  color: white;
  margin: 5%;

  span {
    color: #008000;
  }
`;

const StyledResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 10% 10%;
  text-align: center;
`;

const StyledResultImg = styled(Image)`
  width: 80%;
  height: auto;
`;

const StyledTitle = styled.p`
  font-size: 2.5rem;
  color: #ffffff;

  @media (max-width: 420px) {
    font-size: 1.875rem;
  }
`;

const StyledSubTitle = styled.p`
  font-size: 1.25rem;
  color: #808080;

  @media (max-width: 420px) {
    font-size: 0.9375rem;
  }
`;

const StyledContent = styled.p`
  font-size: 1.0625rem;
  color: #ffffff;
  line-height: 1.8;
  word-break: keep-all;

  @media (max-width: 420px) {
    font-size: 0.875rem;
  }

  @media (min-width: 430px) {
    width: 80%;
  }
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 100px;
`;

const StyledCategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;

  @media (min-width: 430px) {
    width: 30%;
    position: relative;
    left: -155px;
  }
`;

const StyledReturnWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
