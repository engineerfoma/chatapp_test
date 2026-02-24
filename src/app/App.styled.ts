import styled from 'styled-components'
import { colors } from '@shared/lib/theme'

export const StyledApp = styled.div`
  min-height: 100vh;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

export const StyledTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: ${colors.textPrimary};
`
