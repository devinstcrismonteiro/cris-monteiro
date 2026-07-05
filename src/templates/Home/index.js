import { HeroHome } from '../../components/Hero'
import CoursePreview from '../../components/CoursePreview'
import { CTABookHome } from '../../components/CTABook'
import ChannelNews from '../../components/ChannelNews'
import YoutubeChannel from '../../components/YoutubeChannel'
import CoursesAttendance from '../../components/CoursesAttendance'
import BlogContent from '../../components/BlogContent'
import ContactUs from '../../components/ContactUs'
import { Container } from '../../styles/base'

export default function Home({ posts, courses }) {
  return (
    <>
      <HeroHome />
      <CTABookHome />
      <CoursePreview />
      <section style={{ background: '#fffbfc' }}>
        <Container>
          <ChannelNews />
        </Container>
      </section>
      <YoutubeChannel />
      <CoursesAttendance courses={courses} />
      <BlogContent data={posts} />
      <ContactUs />
    </>
  )
}
