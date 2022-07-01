import Course from '../../templates/Course'

import { getAllCourses, getSingleCourse } from '../../graphql/functions'

export default function PageCourse(props) {
  return <Course {...props} />
}

export async function getStaticProps({ params = {} } = {}) {
  const course = await getSingleCourse(params.slug)
  const { course_details } = course
  const { description } = course_details

  const data = {
    ...course,
    course_details: {
      ...course_details,
      description: description?.replace(/(?:\r\n|\r|\n)/g, '<br>'),
    },
  }

  return {
    props: {
      revalidate: 10,
      data
    },
  }
}

export async function getStaticPaths() {
  const courses = await getAllCourses()

  const paths = courses.map((course) => {
    const { slug } = course
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
