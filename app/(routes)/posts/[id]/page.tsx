"use client";

import React, { useEffect, useState } from "react";
import { Posts } from "../../../types/types";
import { getIdFromUrl } from "../../../api/utils";
import placeholder from "../../../assets/placeholder.jpg";
import Image from "next/image";

export default function Post() {
  const [postData, setPostData] = useState<Posts | null>(null);

  async function getPosts() {
    const id = getIdFromUrl(window.location.href);
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${id}`,
      {
        method: "GET",
      }
    );

    return await response.json();
  }

  useEffect(() => {
    getPosts().then((data) => {
      console.log(data);
      setPostData(data);
    });
  }, []);

  if (!postData) return <h2>Loading...</h2>;

  return (
    <div className="my-20 mx-auto max-w-4xl text-center">
      <h2 className="text-3xl">{postData.title}</h2>
      <h3 className="text-rose-500 text-xl m-10">
        {`${postData.createdDate}`.slice(0, 10)}
      </h3>
      <Image
        className="mb-10 mx-auto h-60 w-auto rounded-xl"
        src={placeholder}
        alt="post image"
      />
      <p className="text-left">{postData.text}</p>
    </div>
  );
}
