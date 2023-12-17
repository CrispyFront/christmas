import { NextResponse } from "next/server";
import dbConnect from "libs/db/DBConnect";
import TestCase from "libs/db/models/TestCase";

export async function POST(req: Request) {
  const { type, question, firstAnswer, secondAnswer, imageURL } =
    await req.json();
  await dbConnect();
  await TestCase.create({
    type,
    question,
    firstAnswer,
    secondAnswer,
    imageURL,
  });
  return NextResponse.json({ message: "TestCase Created" }, { status: 201 });
}

export async function GET() {
  await dbConnect();
  const tests = await TestCase.find();
  return NextResponse.json({ tests });
}
