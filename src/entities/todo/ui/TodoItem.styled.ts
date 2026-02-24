import styled from 'styled-components'
import { colors } from '@shared/lib/theme'

export interface StyledProps {
    $completed: boolean
}

export const StyledTodoItem = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: ${colors.backgroundLight};
  border: 1px solid ${colors.borderLight};
  border-radius: 4px;
  transition: background-color 0.2s;
  opacity: ${props => props.$completed ? colors.completedOpacity : 1};

  &:hover {
    background-color: ${colors.backgroundHover};
  }
`

export const StyledCheckbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`

export const StyledTodoText = styled.span<StyledProps>`
  flex: 1;
  font-size: 1rem;
  color: ${props => props.$completed ? colors.textSecondary : colors.textPrimary};
  text-decoration: ${props => props.$completed ? 'line-through' : 'none'};
`
