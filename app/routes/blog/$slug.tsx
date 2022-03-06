import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";

import { getPost } from "~/post";

export const loader: LoaderFunction = async ({
  params,
}) => {
  invariant(params.slug, "expected params.slug");
  return getPost(params.slug);
};

export default function PostSlug() {
  const post = useLoaderData();

  return (
    <>
      <h3 className="text-3xl font-semibold tracking-wide leading-10 mb-6">{post.title}</h3>
      <main dangerouslySetInnerHTML={{ __html: post.html }} className="flex-auto" />
    </>
  );
}