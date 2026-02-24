import { Todo } from '../model/types'
import { useAppDispatch } from '@shared/lib/redux'
import { toggleTodo, deleteTodo } from '../model/todoSlice'

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
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggle}
                className="todo-checkbox"
            />
            <span className="todo-text">{todo.text}</span>
            <button onClick={handleDelete} className="todo-delete-button">
                Удалить
            </button>
        </div>
    )
}
