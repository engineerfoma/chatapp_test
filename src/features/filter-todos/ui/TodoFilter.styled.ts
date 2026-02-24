import styled from 'styled-components'
import { colors } from '@shared/lib/theme'

export const StyledFilterContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  justify-content: center;
`

export const StyledFilterButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  background-color: ${props => props.$active ? colors.primary : colors.backgroundLight};
  color: ${props => props.$active ? colors.white : colors.textPrimary};
  border: 1px solid ${props => props.$active ? colors.primary : colors.border};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.$active ? colors.primaryHover : colors.backgroundHover};
    border-color: ${props => props.$active ? colors.primaryHover : colors.borderLight};
  }
`
