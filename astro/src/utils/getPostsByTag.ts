import { slugifyAll } from "./slugify";
import type { CollectionEntry } from "astro:content";

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

const getPostsByTag = (posts: Post[], tag: string) =>
  posts.filter(post => slugifyAll(post.tags).includes(tag));

export default getPostsByTag;
