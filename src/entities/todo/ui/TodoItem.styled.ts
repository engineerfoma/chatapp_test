import styled from 'styled-components'
import { colors } from '@shared/lib/theme'

export interface StyledProps {
    $completed: boolean
}

export const StyledTodoItem = styled.div<StyledProps & { $isDragging?: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: ${colors.backgroundLight};
  border: 1px solid ${colors.borderLight};
  border-radius: 4px;
  transition: background-color 0.2s;
  opacity: ${props => props.$completed ? colors.completedOpacity : 1};
  opacity: ${props => props.$isDragging ? 0.5 : props.$completed ? colors.completedOpacity : 1};
  cursor: ${props => props.$isDragging ? 'grabbing' : 'grab'};

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

export const StyledDragHandle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: grab;
  color: ${colors.textSecondary};
  user-select: none;

  &:active {
    cursor: grabbing;
  }

  &::before {
    content: '⋮⋮';
    font-size: 16px;
    letter-spacing: -2px;
    line-height: 1;
  }
`
