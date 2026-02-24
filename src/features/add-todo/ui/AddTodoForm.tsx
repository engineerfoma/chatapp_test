import { useState, FormEvent } from 'react'
import { useAppDispatch } from '@shared/lib/redux'
import { addTodo } from '@entities/todo'

export function AddTodoForm() {
    const [text, setText] = useState('')
    const dispatch = useAppDispatch()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (text.trim()) {
            dispatch(addTodo({ text: text.trim(), completed: false }))
            setText('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="add-todo-form">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Добавить новую задачу..."
                className="add-todo-input"
            />
            <button type="submit" className="add-todo-button">
                Добавить
            </button>
        </form>
    )
}
