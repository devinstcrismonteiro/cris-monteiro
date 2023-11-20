import Card from '../Cards'

import SliderContent from '../SliderContent'

const CoursesContent = ({ id, variant, data,hideHeader }) => (
  <SliderContent
    title='Cursos'
    subtitle={variant !== 'secondary' ? 'Conheça todos os nossos cursos' : ''}
    subtitleLink
    leftColumn={2}
    rightColumn={2}
    variant={variant}
    id={id}
    hideHeader={hideHeader}
  >
    {data?.map((item, index) => (
      <Card key={item.id} type='course' slider first={index === 0} {...item} />
    ))}
  </SliderContent>
)

export default CoursesContent
