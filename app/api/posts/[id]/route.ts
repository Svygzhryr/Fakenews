import { PostDto } from "../../../types/types";
import prisma from "../../prisma/prisma";
import { NextResponse } from "next/server";
import { errors } from "../../utils/errors";
import { getIdFromUrl } from "../../utils";

export async function GET(request: Request) {
  let id = getIdFromUrl(request.url);
  return NextResponse.json(
    await prisma.posts.findUnique({
      where: {
        id,
      },
    })
  );
}

export async function PUT(request: Request) {
  let id = getIdFromUrl(request.url);

  let { title, text } = (await request.json()) as PostDto;

  title = title.trim();
  text = text.trim();

  if (!title || !text) return NextResponse.json(errors[400]);

  return NextResponse.json(
    await prisma.posts.update({
      where: {
        id,
      },
      data: {
        title,
        text,
      },
    })
  );
}

export async function DELETE(request: Request) {
  let id = getIdFromUrl(request.url);

  return NextResponse.json(
    await prisma.posts.delete({
      where: {
        id,
      },
    })
  );
}
