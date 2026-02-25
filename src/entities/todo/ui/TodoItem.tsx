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
    StyledEditActionButton,
    StyledDragHandle
} from './TodoItem.styled'
import { useTodoEdit } from './lib/useTodoEdit'
import { handleKeyboardEdit } from './lib/handleKeyboardEdit'
import { validateTodoText } from './lib/validateTodoText'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

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

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: todo.id, disabled: isEditing })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

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
        <StyledTodoItem
            ref={setNodeRef}
            style={style}
            $completed={todo.completed}
            $isDragging={isDragging}
            {...attributes}
        >
            {!isEditing && (
                <StyledDragHandle {...listeners} />
            )}
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
