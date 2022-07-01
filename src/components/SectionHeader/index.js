import { Grid } from './styles'

const SectionHeader = ({ leftColumn, rightColumn, secondary, children }) => (
  <Grid leftColumn={leftColumn} rightColumn={rightColumn} secondary={secondary}>
    {children}
  </Grid>
)

export default SectionHeader
