import styled from 'styled-components'
import { colors } from './theme'

export const StyledForm = styled.form`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
`

export const StyledInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  font-size: 1rem;
  border: 2px solid ${colors.border};
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${colors.primary};
  }
`

export const StyledButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
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

export const StyledDeleteButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  background-color: ${colors.danger};
  color: ${colors.white};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${colors.dangerHover};
  }
`
