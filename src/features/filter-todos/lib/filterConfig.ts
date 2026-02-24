import { FilterType } from '../ui/TodoFilter'

export interface FilterOption {
    value: FilterType
    label: string
}

export const filterOptions: FilterOption[] = [
    { value: 'all', label: 'Все' },
    { value: 'active', label: 'Активные' },
    { value: 'completed', label: 'Выполненные' },
]
