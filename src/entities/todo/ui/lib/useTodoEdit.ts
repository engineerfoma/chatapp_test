import { useState, useRef, useEffect } from 'react'
import { Todo } from '../../model/types'

export const useTodoEdit = (todo: Todo) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editText, setEditText] = useState(todo.text)
    const inputRef = useRef<HTMLInputElement>(null)

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

    const startEdit = () => {
        setIsEditing(true)
        setEditText(todo.text)
    }

    const cancelEdit = () => {
        setEditText(todo.text)
        setIsEditing(false)
    }

    return {
        isEditing,
        editText,
        setEditText,
        inputRef,
        startEdit,
        cancelEdit,
        finishEdit: () => setIsEditing(false),
    }
}
