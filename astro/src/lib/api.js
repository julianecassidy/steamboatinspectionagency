import { useSanityClient } from "astro-sanity";

export async function getAllPosts() {
  const query = `*[_type == 'post']{"tagData": tags[]->{slug, title},author -> {name}, ...} | order(publishedAt desc)`;
  const data = await useSanityClient().fetch(query);
  return data;
}

export async function getAllTagsWithPosts() {
  const query = `*[_type == 'tag']{"posts": *[_type == "post" && references(^._id)] | order(publishedAt desc), ...}`;
  const data = await useSanityClient().fetch(query);
  return data;
}