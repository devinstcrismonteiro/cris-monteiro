// import { getAllTherapists } from '../graphql/functions'

import { HeroTherapists } from '../components/Hero'
import AboutTherapist from '../components/AboutTherapist'
import YoutubeChannel from '../components/YoutubeChannel'

export default function Terapeutas(props) {
  return (
    <>
      <HeroTherapists />
      <AboutTherapist {...props} />
      <YoutubeChannel bgWhite moreMargin />
    </>
  )
}

export async function getStaticProps() {
  // const data = await getAllTherapists()

  return {
    props: {
      revalidate: 10,
      // data,
    },
  }
}
