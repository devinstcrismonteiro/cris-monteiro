import { getApolloClient } from '../../utils/apollo'
import { formatDate } from '../../utils'
import {
  QUERY_ALL_POSTS,
  QUERY_ALL_COURSES,
  QUERY_COURSE_BY_SLUG,
  QUERY_POST_BY_SLUG,
  // QUERY_ALL_THERAPISTS,
  // QUERY_THERAPIST_BY_SLUG,
} from '../queries'

export function mapPostData(post = {}) {
  const data = { ...post }

  if (data.author) {
    data.author = {
      ...data.author.node,
    }
  }

  if (data.date) {
    data.date = formatDate(data.date)
  }

  if (data.categories) {
    data.categories = data.categories.edges.map(({ node }) => {
      return {
        ...node,
      }
    })
  }
  if (data.featuredImage) {
    data.featuredImage = data.featuredImage.node
  }

  return data
}

export const getAllPosts = async () => {
  const apolloClient = getApolloClient()

  const data = await apolloClient.query({
    query: QUERY_ALL_POSTS,
  })

  const posts = data?.data.posts.edges.map(({ node = {} }) => node)

  return Array.isArray(posts) && posts.map(mapPostData)
}

export const getAllCourses = async () => {
  const apolloClient = getApolloClient()

  const data = await apolloClient.query({
    query: QUERY_ALL_COURSES,
  })

  const courses = data?.data.cursos.edges.map(({ node = {} }) => node)

  return Array.isArray(courses) && courses.map(mapPostData)
}

// export const getAllTherapists = async () => {
//   const apolloClient = getApolloClient()

//   const data = await apolloClient.query({
//     query: QUERY_ALL_THERAPISTS,
//   })

//   const terapeutas = data?.data.terapeutas.edges.map(({ node = {} }) => node)

//   return Array.isArray(terapeutas) && terapeutas.map(mapPostData)
// }

export const getSingleCourse = async (slug) => {
  const apolloClient = getApolloClient()

  const course = await apolloClient.query({
    query: QUERY_COURSE_BY_SLUG,
    variables: {
      slug,
    },
    fetchPolicy: 'no-cache',
  })

  const single = [course?.data.curso].map(mapPostData)[0]
  return single
}

export const getSingleBlogPost = async (slug) => {
  const apolloClient = getApolloClient()

  const post = await apolloClient.query({
    query: QUERY_POST_BY_SLUG,
    variables: {
      slug,
    },
    fetchPolicy: 'no-cache',
  })

  return [post?.data.post].map(mapPostData)[0]
}

// export const getSingleTherapist = async (slug) => {
//   const apolloClient = getApolloClient()

//   const therapist = await apolloClient.query({
//     query: QUERY_THERAPIST_BY_SLUG,
//     variables: {
//       slug,
//     },
//     fetchPolicy: 'no-cache',
//   })

//   return [therapist?.data.terapeuta].map(mapPostData)[0]
// }
