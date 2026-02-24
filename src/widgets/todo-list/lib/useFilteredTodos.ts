import { useMemo } from 'react'
import { Todo } from '@entities/todo'
import { FilterType } from '@features/filter-todos'
import { filterTodos } from './filterTodos'

export const useFilteredTodos = (todos: Todo[], filter: FilterType): Todo[] => {
    return useMemo(() => filterTodos(todos, filter), [todos, filter])
}
