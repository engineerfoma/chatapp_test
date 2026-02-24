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

export const StyledEditActionButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${colors.primaryHover};
  }
`

export const StyledEditInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
  border: 2px solid ${colors.primary};
  border-radius: 4px;
  outline: none;
  background-color: ${colors.white};
`

export const StyledEditButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${colors.primaryHover};
  }
`

export const StyledCancelButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  background-color: ${colors.border};
  color: ${colors.textPrimary};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${colors.borderLight};
  }
`
