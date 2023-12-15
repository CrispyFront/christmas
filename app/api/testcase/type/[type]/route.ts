import { NextResponse } from "next/server";
import dbConnect from "libs/db/DBConnect";
import TestCase from "libs/db/models/TestCase";

export async function GET(
  req: Request,
  { params }: { params: { type: string } }
) {
  const { type } = params;
  await dbConnect();
  const typeTestCase = await TestCase.find({ type: `${type}` });
  return NextResponse.json({ typeTestCase }, { status: 200 });
}
