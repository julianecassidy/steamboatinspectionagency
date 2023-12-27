import { slugifyStr } from "./slugify";
// import type { CollectionEntry } from "astro:content";

export interface Post {
    title: string,
    slug: string,
    author: string,
    mainImage: string,
    tags: [],
    tagData: [],
    publishedAt: string,
    featured: boolean,
    body: string,
    description: any,
    _id: string,
}


const getUniqueTags = (posts: Post[]) => {
  console.log(posts);
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
