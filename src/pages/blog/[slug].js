import Post from '../../templates/Post'

import { getAllPosts, getSingleBlogPost } from '../../graphql/functions'

export default function PageCBlog(props) {
  return <Post {...props} />
}

export async function getServerSideProps({ params = {} } = {}) {
  const post = await getSingleBlogPost(params.slug)
  const posts = await getAllPosts()

  return {
    props: {
      revalidate: 10,
      data: post,
      posts,
    },
  }
}

export async function getServerSidePaths() {
  const posts = await getAllPosts()

  const paths = posts.map((post) => {
    const { slug } = post
    return {
      params: {
        slug,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}
