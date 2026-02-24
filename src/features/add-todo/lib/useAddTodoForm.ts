import { useState, FormEvent } from 'react'
import { useAppDispatch } from '@shared/lib/redux'
import { addTodo } from '@entities/todo'

export const useAddTodoForm = () => {
    const [text, setText] = useState('')
    const dispatch = useAppDispatch()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const trimmedText = text.trim()
        if (trimmedText) {
            dispatch(addTodo({ text: trimmedText, completed: false }))
            setText('')
        }
    }

    const handleChange = (value: string) => {
        setText(value)
    }

    return {
        text,
        handleSubmit,
        handleChange,
    }
}
