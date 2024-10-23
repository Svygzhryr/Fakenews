import prisma from "../../prisma/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  let id = request.url.slice(-36);
  return NextResponse.json(
    await prisma.posts.findUnique({
      where: {
        id,
      },
    })
  );
}

// export async function PUT(request: Request) {
//   let id = request.url.slice(-36);
//   return NextResponse.json(
//     await prisma.posts.update({
//       where: {
//         id,
//       },
//     })
//   );
// }

export async function DELETE(request: Request) {
  let id = request.url.slice(-36);
  return NextResponse.json(
    await prisma.posts.delete({
      where: {
        id,
      },
    })
  );
}
