import { getPosts } from "@/lib/api/posts/postAPI";

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }]
}
 
async function getPost(params:any) {
  const res = await fetch(`https://.../posts/${params.id}`)
  const post = await res.json()
 
  return post
}
 
export default async function Post({ params }) {
  const post = await getPost(params)
 
  return <PostLayout post={post} />
}



