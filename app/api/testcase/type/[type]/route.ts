import { NextResponse } from "next/server";
import dbConnect from "libs/db/DBConnect";
import TestCase from "libs/db/models/TestCase";
import useAllowCORS from "hooks/useAllowCORS";

export async function GET(
  req: Request,
  { params }: { params: { type: string } }
) {
  const { type } = params;
  await dbConnect();
  const typeTestCase = await TestCase.find({ type: `${type}` });
  const newHeaders = useAllowCORS(req);
  return NextResponse.json(
    { typeTestCase },
    {
      status: 200,
      headers: newHeaders,
    }
  );
}
