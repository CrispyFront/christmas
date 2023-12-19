"use client";

import Loading from "app/loading";
import { testMap } from "app/test/TestResult";
import Answer from "components/Button/Answer";
import Gauge from "components/Gauge/Gauge";
import { getByTypeTestCase } from "libs/api";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

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
  const query = useSearchParams().get("page");
  const router = useRouter();
  const [flag, setFlag] = useState(true);

  const PageNum = Number(query);
  const ProgressBar = Array(6).fill("full");
  const TypeNum = Math.floor(PageNum / 3);
  const NextNum = PageNum + 1;

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
  }, [query]);

  const moveNext = (type: string) => {
    let num = testMap.get(type)! + 1;
    testMap.set(type, num);

    setFlag(true);

    if (NextNum === 12) {
      const src = "https://christmas-test.vercel.app/result";
      router.push(src);
    } else {
      const src = "https://christmas-test.vercel.app/test?page=" + NextNum;
      router.push(src);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlag(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <>
      {flag ? (
        <Loading />
      ) : (
        <StyledWrapper>
          <StyledProgressBar>
            {ProgressBar.map((value, index) => (
              <Gauge key={index} type={value} />
            ))}
          </StyledProgressBar>
          {tests.length > 0 && (
            <StyledTest>
              <Image
                src={tests[PageNum % 3].imageURL}
                alt="아이콘"
                width="250"
                height="200"
              />
              <StyledQuestion>{tests[PageNum % 3].question}</StyledQuestion>
            </StyledTest>
          )}
          {tests.length > 0 && (
            <StyledButton>
              <Answer
                color="green"
                text={tests[PageNum % 3].firstAnswer.content}
                onClick={() => moveNext(tests[PageNum % 3].firstAnswer.type)}
              />
              <Answer
                color="red"
                text={tests[PageNum % 3].secondAnswer.content}
                onClick={() => moveNext(tests[PageNum % 3].secondAnswer.type)}
              />
            </StyledButton>
          )}
        </StyledWrapper>
      )}
    </>
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
  word-break: keep-all;

  @media (max-width: 420px) {
    font-size: 1.55rem;
  }
`;

const StyledButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;
