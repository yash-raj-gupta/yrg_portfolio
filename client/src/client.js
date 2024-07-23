import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client  = sanityClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2024-07-22',
    useCdn: true,
    token: import.meta.env.VITE_SANITY_TOKEN,
})


// these 2 code are always written when working with sanity client
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);