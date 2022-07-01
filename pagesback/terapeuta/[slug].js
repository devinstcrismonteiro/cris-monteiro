import { HeroTherapist } from '../../components/Hero'
import AboutTherapist from '../../components/AboutTherapist'
import YoutubeChannel from '../../components/YoutubeChannel'
// import { getAllTherapists, getSingleTherapist } from '../../graphql/functions'

export default function Terapeuta(props) {
  return (
    <>
      <HeroTherapist {...props} />
      <AboutTherapist {...props} />
      <YoutubeChannel bgWhite moreMargin />
    </>
  )
}

// export async function getStaticProps({ params = {} } = {}) {
//   console.log(params.slug)
//   const therapist = await getSingleTherapist(params.slug)

//   return {
//     props: {
//       revalidate: 10,
//       data: therapist,
//     },
//   }
// }

// export async function getStaticPaths() {
//   const therapists = await getAllTherapists()

//   const paths = therapists.map((item) => {
//     const { slug } = item
//     return {
//       params: {
//         slug,
//       },
//     }
//   })

//   return {
//     paths,
//     fallback: false,
//   }
// }
