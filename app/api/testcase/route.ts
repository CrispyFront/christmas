import { NextResponse } from "next/server";
import dbConnect from "libs/db/DBConnect";
import TestCase from "libs/db/models/TestCase";
import useAllowCORS from "hooks/useAllowCORS";

export async function POST(req: Request) {
  const { type, question, firstAnswer, secondAnswer, imageURL } =
    await req.json();
  const newHeaders = useAllowCORS(req);
  await dbConnect();
  await TestCase.create({
    type,
    question,
    firstAnswer,
    secondAnswer,
    imageURL,
  });
  return NextResponse.json(
    { message: "TestCase Created" },
    { status: 201, headers: newHeaders }
  );
}

export async function GET(req: Request) {
  const newHeaders = useAllowCORS(req);
  await dbConnect();
  const testes = await TestCase.find();
  return NextResponse.json({ testes }, { status: 200, headers: newHeaders });
}
