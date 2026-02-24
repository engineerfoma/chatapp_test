import { useAppSelector } from '@shared/lib/redux'
import { TodoItem } from '@entities/todo'
import { AddTodoForm } from '@features/add-todo'
import { StyledTodoList, StyledTodosContainer, StyledEmptyMessage } from './TodoList.styled'

export function TodoList() {
    const todos = useAppSelector((state) => state.todo.todos)

    return (
        <StyledTodoList>
            <AddTodoForm />
            <StyledTodosContainer>
                {todos.length === 0 ? (
                    <StyledEmptyMessage>Список задач пуст</StyledEmptyMessage>
                ) : (
                    todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
                )}
            </StyledTodosContainer>
        </StyledTodoList>
    )
}
