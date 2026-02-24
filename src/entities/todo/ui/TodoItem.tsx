import { Todo } from '../model/types'
import { useAppDispatch } from '@shared/lib/redux'
import { toggleTodo, deleteTodo, updateTodo } from '../model/todoSlice'
import { StyledDeleteButton } from '@shared/lib/styled'
import { 
    StyledTodoItem, 
    StyledCheckbox, 
    StyledTodoText,
    StyledEditInput,
    StyledEditButton,
    StyledCancelButton,
    StyledEditActionButton
} from './TodoItem.styled'
import { useTodoEdit } from './lib/useTodoEdit'
import { handleKeyboardEdit } from './lib/handleKeyboardEdit'
import { validateTodoText } from './lib/validateTodoText'

interface TodoItemProps {
    todo: Todo
}

export function TodoItem({ todo }: TodoItemProps) {
    const dispatch = useAppDispatch()
    const {
        isEditing,
        editText,
        setEditText,
        inputRef,
        startEdit,
        cancelEdit,
        finishEdit,
    } = useTodoEdit(todo)

    const handleToggle = () => {
        dispatch(toggleTodo(todo.id))
    }

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id))
    }

    const handleSave = () => {
        const trimmedText = editText.trim()
        if (validateTodoText(trimmedText)) {
            dispatch(updateTodo({ id: todo.id, text: trimmedText }))
            finishEdit()
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        handleKeyboardEdit(e, {
            onSave: handleSave,
            onCancel: cancelEdit,
        })
    }

    return (
        <StyledTodoItem $completed={todo.completed}>
            <StyledCheckbox
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggle}
                disabled={isEditing}
            />
            {isEditing ? (
                <>
                    <StyledEditInput
                        ref={inputRef}
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <StyledEditButton onClick={handleSave}>
                        Сохранить
                    </StyledEditButton>
                    <StyledCancelButton onClick={cancelEdit}>
                        Отмена
                    </StyledCancelButton>
                </>
            ) : (
                <>
                    <StyledTodoText $completed={todo.completed}>
                        {todo.text}
                    </StyledTodoText>
                    <StyledEditActionButton onClick={startEdit}>
                        Редактировать
                    </StyledEditActionButton>
                    <StyledDeleteButton onClick={handleDelete}>
                        Удалить
                    </StyledDeleteButton>
                </>
            )}
        </StyledTodoItem>
    )
}
