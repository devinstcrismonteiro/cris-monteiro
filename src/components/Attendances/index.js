import Card from '../Cards'

import SliderContent from '../SliderContent'

const Attendances = ({ data }) => (
  <SliderContent>
    {data.map((item, index) => (
      <Card
        key={item.id}
        slider
        first={index === 0}
        url='https://wa.me/5511988811961'
        openOnNewTab
        {...item}
      />
    ))}
  </SliderContent>
)

export default Attendances
