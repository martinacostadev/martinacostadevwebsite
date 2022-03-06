import { Link, useLoaderData } from "remix";

import { getPosts } from "~/post";
import type { Post } from "~/post";
import Header from "../../component/Header";

export const loader = async () => {
  return getPosts();
};

export default function Posts() {
    const posts = useLoaderData<Post[]>();

    return (
      <main className="pt-6 md:pl-6">
        {/* <Header title="Posts" /> */}
        <ul>
        {posts.map((post) => (
            <li key={post.title} className="text-2xl md:text-3xl">
              <Link to={post.slug}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    );
  }