import { FilterType } from '@features/filter-todos'

export const getEmptyMessage = (totalTodos: number, filter: FilterType): string => {
    if (totalTodos === 0) {
        return 'Список задач пуст'
    }

    switch (filter) {
        case 'active':
            return 'Нет активных задач'
        case 'completed':
            return 'Нет выполненных задач'
        default:
            return 'Список задач пуст'
    }
}
