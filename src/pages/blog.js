import { getAllPosts } from '../graphql/functions'

import Blog from '../templates/Blog'

export default function BlogPosts({ posts }) {
  return <Blog data={posts} />
}

export async function getServerSideProps() {
  const posts = await getAllPosts()

  return {
    props: {
      posts,
    },
  }
}
