import { Todo } from '../model/types'
import { useAppDispatch } from '@shared/lib/redux'
import { toggleTodo, deleteTodo } from '../model/todoSlice'
import { StyledDeleteButton } from '@shared/lib/styled'
import { StyledTodoItem, StyledCheckbox, StyledTodoText } from './TodoItem.styled'

interface TodoItemProps {
    todo: Todo
}

export function TodoItem({ todo }: TodoItemProps) {
    const dispatch = useAppDispatch()

    const handleToggle = () => {
        dispatch(toggleTodo(todo.id))
    }

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id))
    }

    return (
        <StyledTodoItem $completed={todo.completed}>
            <StyledCheckbox
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggle}
            />
            <StyledTodoText $completed={todo.completed}>
                {todo.text}
            </StyledTodoText>
            <StyledDeleteButton onClick={handleDelete}>
                Удалить
            </StyledDeleteButton>
        </StyledTodoItem>
    )
}
