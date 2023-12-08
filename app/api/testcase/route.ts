import dbConnect from "db/DBConnect";
import TestCase from "db/models/TestCase";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: Request) {
  const { type, question, firstAnswer, secondAnswer } = await req.json();
  await dbConnect();
  await TestCase.create({ type, question, firstAnswer, secondAnswer });
  return NextResponse.json({ message: "TestCase Created" }, { status: 201 });
}

export async function GET() {
  await dbConnect();
  const testes = await TestCase.find();
  return NextResponse.json({ testes });
}
