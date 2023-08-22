import { getAllCourses } from '../graphql/functions'

import CoursesContent from '../components/CoursesContent'
import { CTABook } from '../components/CTABook'

export default function Cursos({ courses }) {
  return (
    <>
      {/* <CoursesContent data={courses} variant="secondary" /> */}
      <CTABook />
    </>
  )
}

// export async function getServerSideProps() {
//   const courses = await getAllCourses()

//   return {
//     props: {
//       courses,
//     },
//   }
// }
