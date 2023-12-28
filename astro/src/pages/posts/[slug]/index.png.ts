import type { APIRoute } from "astro";
import { generateOgImageForPost } from "@utils/generateOgImages";
import { slugifyStr } from "@utils/slugify";
import { getAllPosts } from "lib/api";
import { formatPostData } from "@utils/helpers.js";


export interface Post {
  title: string,
  slug: string,
  author: string,
  mainImage: string,
  mainImageAlt: string,
  tags: [],
  tagData: [],
  publishedAt: string,
  featured: boolean,
  body: string,
  description: any,
  _id: string,
}

export async function getStaticPaths() {
  const posts = formatPostData(await getAllPosts())
  .then((p:Post[]) =>
    p.filter((post:Post) => !post.mainImage)
  );

  return posts.map((post:Post) => ({
    params: { slug: slugifyStr(post.title) },
    props: post,
  }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(await generateOgImageForPost(props as Post), {
    headers: { "Content-Type": "image/png" },
  });
