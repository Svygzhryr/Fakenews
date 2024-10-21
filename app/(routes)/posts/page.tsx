"use client";

import { useEffect, useState } from "react";
import { Posts } from "../../types/types";

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
    <div className="grid grid-rows-3 grid-cols-3 gap-4 p-4">
      {posts.map((post) => (
        <div
          className="p-4 hover:cursor-pointer hover:bg-secondary transition-all flex flex-col justify-between text-sm"
          key={post.id}
        >
          <h2 className="text-xl text-rose-500">{post.title}</h2>
          <p className="my-4">{post.text}</p>
          <h3>{`${post.createdDate}`.slice(0, 10)}</h3>
        </div>
      ))}
    </div>
  );
}
