import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([{ id: 0, title: "Testing Route" }]);
}
