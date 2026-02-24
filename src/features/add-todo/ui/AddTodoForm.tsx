import { useState, FormEvent } from 'react'
import { useAppDispatch } from '@shared/lib/redux'
import { addTodo } from '@entities/todo'
import { StyledForm, StyledInput, StyledButton } from '@shared/lib/styled'

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
        <StyledForm onSubmit={handleSubmit}>
            <StyledInput
                type="text"
                value={text}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                placeholder="Добавить новую задачу"
            />
            <StyledButton type="submit">
                Добавить
            </StyledButton>
        </StyledForm>
    )
}
