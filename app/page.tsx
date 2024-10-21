import Link from "next/link";

export default function Home() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
      <h2>About us stuff</h2>
      <Link className="text-3xl hover:text-hover transition-all" href="/posts">
        Go to posts
      </Link>
    </div>
  );
}
