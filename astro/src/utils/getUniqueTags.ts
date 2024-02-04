import type { Post } from "@config";
import { slugifyStr } from "./slugify";

const getUniqueTags = (posts: Post[]) => {
  const tags: string[] = posts
    .flatMap(post => post.tags)
    .map(tag => slugifyStr(tag))
    .filter(
      (value: string, index: number, self: string[]) =>
        self.indexOf(value) === index
    )
    .sort((tagA: string, tagB: string) => tagA.localeCompare(tagB));
  return tags;
};

export default getUniqueTags;
