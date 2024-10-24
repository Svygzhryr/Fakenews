import { PostDto } from "../../types/types";
import { generateId } from "../../utils";
import prisma from "../prisma/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(await prisma.posts.findMany());
}

export async function POST(request: Request) {
  let { title, text } = (await request.json()) as PostDto;

  title = title.trim();
  text = text.trim();

  // ещё много валидации нужно доделать будет
  // это касается и других роутов
  if (!title || !text)
    return NextResponse.json({ error: "InvalidBody" }, { status: 400 });

  return NextResponse.json(
    await prisma.posts.create({
      data: {
        id: generateId(),
        title,
        text,
        createdDate: new Date(),
      },
    })
  );
}
