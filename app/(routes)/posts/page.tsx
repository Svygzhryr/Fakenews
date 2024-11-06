"use client";

import { useEffect, useState } from "react";
import { Posts } from "../../types/types";
import Image from "next/image";
import placeholder from "../../assets/placeholder.jpg";
import Link from "next/link";

export default function Home() {
  // example code
  const [posts, setPosts] = useState<Posts[] | null>(null);

  async function getPosts() {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`, {
      method: "GET",
    });

    return await response.json();
  }

  useEffect(() => {
    getPosts().then((data) => {
      console.log(data);
      setPosts(data);
    });
  }, []);

  if (!posts) return <h2>Loading...</h2>;

  return (
    <div className="max-w-5xl mx-auto my-0 grid grid-rows-2 grid-cols-2 gap-4 p-4">
      {posts.map((post) => (
        <Link
          href={`/posts/${post.id}`}
          className="max-h-96 rounded-xl hover:cursor-pointer bg-secondary hover:bg-neutral-800 transition-all  text-sm"
          key={post.id}
        >
          <Image
            className="rounded-xl h-2/3"
            src={placeholder}
            alt={"post image"}
          />
          <div className="h-1/3 p-4 flex flex-col justify-between">
            <h2 className="text-lg mb-4">{post.title}</h2>
            <h3 className="text-rose-500">
              {`${post.createdDate}`.slice(0, 10)}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
