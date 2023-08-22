import { HeroHome } from '../../components/Hero'
import CoursePreview from '../../components/CoursePreview'
import { CTABookHome } from '../../components/CTABook'
import ChannelNews from '../../components/ChannelNews'
import YoutubeChannel from '../../components/YoutubeChannel'
// import CoursesContent from '../../components/CoursesContent'
import Attendance from '../../components/SectionAttendance'
import BlogContent from '../../components/BlogContent'
import ContactUs from '../../components/ContactUs'

import { Container } from '../../styles/base'

export default function Home({ posts, courses }) {
  return (
    <>
      <HeroHome />
      <CoursePreview />
      <CTABookHome />
      <section style={{ background: '#fffbfc' }}>
        <Container>
          <ChannelNews />
        </Container>
      </section>
      <YoutubeChannel />
      {/* <CoursesContent data={courses} id="home-todos-cursos" /> */}
      <Attendance hasLink bgWhite />
      {/* <BlogContent data={posts} /> */}
      <ContactUs />
    </>
  )
}
