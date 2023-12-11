import { NextResponse } from "next/server";
import dbConnect from "libs/db/DBConnect";
import TestCase from "libs/db/models/TestCase";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  await dbConnect();
  await TestCase.findByIdAndDelete(id);
  return NextResponse.json({ message: "TestCase Deleted" }, { status: 200 });
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { newRowState: rowState } = await req.json();
  await dbConnect();
  await TestCase.findByIdAndUpdate(id, { rowState });
  return NextResponse.json({ message: "TestCase Update" }, { status: 200 });
}
