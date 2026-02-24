import { StyledFilterContainer, StyledFilterButton } from './TodoFilter.styled'
import { filterOptions } from '../lib/filterConfig'

export type FilterType = 'all' | 'active' | 'completed'

interface TodoFilterProps {
    currentFilter: FilterType
    onFilterChange: (filter: FilterType) => void
}

export function TodoFilter({ currentFilter, onFilterChange }: TodoFilterProps) {
    return (
        <StyledFilterContainer>
            {filterOptions.map((option) => (
                <StyledFilterButton
                    key={option.value}
                    $active={currentFilter === option.value}
                    onClick={() => onFilterChange(option.value)}
                >
                    {option.label}
                </StyledFilterButton>
            ))}
        </StyledFilterContainer>
    )
}
