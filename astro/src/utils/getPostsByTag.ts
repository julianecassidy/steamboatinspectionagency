import type { Post } from "@config";
import { slugifyAll } from "./slugify";

const getPostsByTag = (posts: Post[], tag: string) =>
  posts.filter(post => slugifyAll(post.tags).includes(tag));

export default getPostsByTag;
