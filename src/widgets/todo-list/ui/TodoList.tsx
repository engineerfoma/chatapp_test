import { useState } from 'react'
import { useAppSelector } from '@shared/lib/redux'
import { TodoItem } from '@entities/todo'
import { AddTodoForm } from '@features/add-todo'
import { TodoFilter, FilterType } from '@features/filter-todos'
import { StyledTodoList, StyledTodosContainer, StyledEmptyMessage } from './TodoList.styled'
import { useFilteredTodos } from '../lib/useFilteredTodos'
import { getEmptyMessage } from '../lib/getEmptyMessage'

export function TodoList() {
    const [filter, setFilter] = useState<FilterType>('all')
    const todos = useAppSelector((state) => state.todo.todos)
    const filteredTodos = useFilteredTodos(todos, filter)

    return (
        <StyledTodoList>
            <AddTodoForm />
            {todos.length > 0 && (
                <TodoFilter currentFilter={filter} onFilterChange={setFilter} />
            )}
            <StyledTodosContainer>
                {filteredTodos.length === 0 ? (
                    <StyledEmptyMessage>
                        {getEmptyMessage(todos.length, filter)}
                    </StyledEmptyMessage>
                ) : (
                    filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
                )}
            </StyledTodosContainer>
        </StyledTodoList>
    )
}
