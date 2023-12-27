// import { parseISO, format } from 'date-fns';
import { useSanityClient, createImageBuilder} from 'astro-sanity';

const builder = createImageBuilder(useSanityClient());

// NOTE: this functionality is currently handled with Datetime where the date is
// rendered on the page.
// export function formatBlogPostDate(date) {
//   const dateString = parseISO(date, 'YYYY/MM/Do');
//   const formattedDateString = format(dateString, 'MMMM do, yyyy');
//   return `${formattedDateString}`;
// }

export function getSanityImageURL(source) {
  return builder.image(source);
}

export function formatPostData(posts) {
  return posts.map((post) => {
    return {
        title: post.title,
        slug: post.slug.current,
        description: post.description[0].children[0].text,
        tags: post.tagData.map(tag => tag.title),
        author: post.author,
        body: post.body,
        featured: post.featured,
        publishedAt: post.publishedAt,
        id: post._id,
        mainImage: post.mainImage,
        mainImageAlt: post.mainImageAlt,
    }
})
}