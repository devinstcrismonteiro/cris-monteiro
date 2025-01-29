// import { HeroAttendance } from '../components/Hero'
import Attendances from '../components/Attendances'
import SectionAttendance from '../components/SectionAttendance'

import { atendimentosResume } from '../utils'

const Terapeutas = () => (
  <>
    {/* <HeroAttendance /> */}
    <SectionAttendance openOnNewTab url='https://wa.me/5511991176659' />
    <Attendances data={atendimentosResume} />
  </>
)

export default Terapeutas
