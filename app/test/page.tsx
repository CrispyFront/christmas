"use client";

import MainIcon from "assets/icons/MainIcon.png";
import Answer from "components/Button/Answer";
import Gauge from "components/Gauge/Gauge";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { getByTypeTestCase } from "@/libs/api";

interface TestType {
  type: string;
  question: string;
  firstAnswer: {
    type: string;
    content: string;
  };
  secondAnswer: {
    type: string;
    content: string;
  };
  imageURL: string;
}

function Test() {
  const [tests, setTests] = useState<TestType[]>([]);

  const PageNum = Number(useSearchParams().get("page"));
  const ProgressBar = Array(6).fill("full");
  const TypeNum = Math.ceil(PageNum / 4);

  const full: number = Math.floor(PageNum / 2);
  const half: number = PageNum % 2;

  if (half === 1) {
    ProgressBar[full] = "half";
    ProgressBar.fill("empty", full + 1, 6);
  } else {
    ProgressBar.fill("empty", full, 6);
  }

  const fetchData = async () => {
    let type = "";
    switch (TypeNum) {
      case 0:
        type = "IE";
        break;
      case 1:
        type = "PJ";
        break;
      case 2:
        type = "NS";
        break;
      case 3:
        type = "FT";
        break;
    }
    const res = await getByTypeTestCase({ type });
    const { typeTestCase } = res;
    if (typeTestCase && typeTestCase.length > 0) {
      setTests(typeTestCase);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyledWrapper>
      <StyledProgressBar>
        {ProgressBar.map((value, index) => (
          <Gauge key={index} type={value} />
        ))}
      </StyledProgressBar>
      {tests.length > 0 && (
        <StyledTest>
          <Image
            src={tests[PageNum % 4].imageURL}
            alt="아이콘"
            width="300"
            height="250"
          />
          <StyledQuestion>{tests[PageNum % 4].question}</StyledQuestion>
        </StyledTest>
      )}
      {tests.length > 0 && (
        <StyledButton>
          <Answer color="green" text={tests[PageNum % 4].firstAnswer.content} />
          <Answer color="red" text={tests[PageNum % 4].secondAnswer.content} />
        </StyledButton>
      )}
    </StyledWrapper>
  );
}

export default Test;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  @media (max-width: 420px) {
    width: 80%;
  }
`;

const StyledProgressBar = styled.div`
  margin-top: 8%;
`;

const StyledTest = styled.div`
  color: white;
  font-size: 1.6rem;
  text-align: center;
  line-height: 1.5;
  margin: 30px;

  @media (max-width: 420px) {
    margin: 10px;
  }
`;

const StyledQuestion = styled.p`
  color: white;

  @media (max-width: 420px) {
    font-size: 1.55rem;
  }
`;

const StyledButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;
