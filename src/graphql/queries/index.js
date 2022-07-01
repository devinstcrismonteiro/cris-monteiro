import { gql } from '@apollo/client'

export const QUERY_ALL_POSTS = gql`
  query AllPosts {
    posts(first: 10000) {
      edges {
        node {
          id
          title
          slug
          author {
            node {
              name
            }
          }
          content
          commentCount
          date
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`

export const QUERY_ALL_COURSES = gql`
  query AllCourses {
    cursos(first: 10000) {
      edges {
        node {
          id
          title
          slug
          content
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`

export const QUERY_COURSE_BY_SLUG = gql`
  query CourseBySlug($slug: ID!) {
    curso(id: $slug, idType: SLUG) {
      id
      title
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
      course_details {
        caracteristicas {
          nome
          numero
          descricao
        }
        description
        price
        linkDoCurso
      }
      content
    }
  }
`

export const QUERY_POST_BY_SLUG = gql`
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      author {
        node {
          name
        }
      }
      commentCount
      date
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
      content
    }
  }
`


