import * as S from './styles'

const Hero = ({ leftColumn, rightColumn, gap, children }) => (
  <S.Grid leftColumn={leftColumn} rightColumn={rightColumn} gap={gap}>
    {children}
  </S.Grid>
)

export default Hero
