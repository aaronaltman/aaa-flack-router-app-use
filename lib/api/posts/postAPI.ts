import { fetchAPI } from "../fetch";

export async function getPosts() {
  const data = await fetchAPI(`
    query MyQuery (slug: String,)){
    posts {first: 1000} {
        edges {
            node {
                id
                title
                slug
                date
                excerpt
                content
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
            }
        }
    }
    variables: {
        slug: $slug
    }
}
  `);
  return data?.posts?.edges;
}