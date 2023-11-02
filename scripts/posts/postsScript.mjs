import { data } from "autoprefixer"

const url = 'https://wp.flackinjurylaw.com/graphql'
const query = `
query MyQuery {
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
}
`

async function getPosts() {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    })
        .then(res => res.json())
        .then(res => res.data?.posts?.edges)
}

