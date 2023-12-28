import rss from "@astrojs/rss";
import { getAllPosts } from "lib/api";
import { formatPostData } from "@utils/helpers.js";
import { SITE } from "@config";

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

export async function GET() {
  const posts = formatPostData(await getAllPosts());
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: posts.map((post:Post) => ({
      link: `posts/${post.slug}`,
      title: post.title,
      description: post.description,
      pubDate: new Date(post.publishedAt),
    })),
  });
}
