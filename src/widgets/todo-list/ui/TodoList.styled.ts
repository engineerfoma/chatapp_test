import styled from 'styled-components'
import { colors } from '@shared/lib/theme'

export const StyledTodoList = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

export const StyledTodosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const StyledEmptyMessage = styled.p`
  text-align: center;
  padding: 2rem;
  color: ${colors.textSecondary};
  font-size: 1.1rem;
`
