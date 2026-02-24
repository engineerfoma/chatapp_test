import { Todo } from '@entities/todo'
import { FilterType } from '@features/filter-todos'

export const filterTodos = (todos: Todo[], filter: FilterType): Todo[] => {
    switch (filter) {
        case 'active':
            return todos.filter(todo => !todo.completed)
        case 'completed':
            return todos.filter(todo => todo.completed)
        default:
            return todos
    }
}
