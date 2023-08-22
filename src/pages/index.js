import Home from '../templates/Home'
// import { getAllCourses, getAllPosts } from '../graphql/functions'

export default function Index(props) {
  return <Home {...props} />
}

// export async function getServerSideProps() {
//   const posts = await getAllPosts()
//   const courses = await getAllCourses()

//   return {
//     props: {
//       posts,
//       courses,      
//     },
//   }
// }
