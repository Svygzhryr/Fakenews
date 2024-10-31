import { PostDto } from "../../types/types";
import prisma from "../prisma/prisma";
import { NextResponse } from "next/server";
import { generateId } from "../utils";
import { errors } from "../utils/errors";

export async function GET() {
  return NextResponse.json(await prisma.posts.findMany());
}

export async function POST(request: Request) {
  let { title, text } = (await request.json()) as PostDto;

  title = title.trim();
  text = text.trim();

  // ещё много валидации нужно доделать будет
  // это касается и других роутов
  if (!title || !text) return NextResponse.json(errors[400]);

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
