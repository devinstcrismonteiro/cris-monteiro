import Card from '../Cards'
import SliderContent from '../SliderContent'

const BlogContent = ({ data }) => {
  return (
    <SliderContent
      title="Blog"
      leftColumn={1}
      rightColumn={9}
      blog
    >
      {data?.map((item, index) => (
        <Card key={item?.id} type="blog" slider first={index === 0} {...item} />
      ))}
    </SliderContent>
  )
}

export default BlogContent
