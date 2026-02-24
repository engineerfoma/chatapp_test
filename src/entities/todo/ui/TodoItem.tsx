import { useState, useRef, useEffect } from 'react'
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

interface TodoItemProps {
    todo: Todo
}

export function TodoItem({ todo }: TodoItemProps) {
    const [isEditing, setIsEditing] = useState(false)
    const [editText, setEditText] = useState(todo.text)
    const inputRef = useRef<HTMLInputElement>(null)
    const dispatch = useAppDispatch()

    const handleToggle = () => {
        dispatch(toggleTodo(todo.id))
    }

    const handleDelete = () => {
        dispatch(deleteTodo(todo.id))
    }

    const handleEdit = () => {
        setIsEditing(true)
        setEditText(todo.text)
    }

    const handleSave = () => {
        if (editText.trim()) {
            dispatch(updateTodo({ id: todo.id, text: editText.trim() }))
            setIsEditing(false)
        }
    }

    const handleCancel = () => {
        setEditText(todo.text)
        setIsEditing(false)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSave()
        } else if (e.key === 'Escape') {
            handleCancel()
        }
    }

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isEditing])

    useEffect(() => {
        if (!isEditing) {
            setEditText(todo.text)
        }
    }, [todo.text, isEditing])

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
                    <StyledCancelButton onClick={handleCancel}>
                        Отмена
                    </StyledCancelButton>
                </>
            ) : (
                <>
                    <StyledTodoText $completed={todo.completed}>
                        {todo.text}
                    </StyledTodoText>
                    <StyledEditActionButton onClick={handleEdit}>
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
