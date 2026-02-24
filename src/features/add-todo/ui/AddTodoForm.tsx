import { StyledForm, StyledInput, StyledButton } from '@shared/lib/styled'
import { useAddTodoForm } from '../lib/useAddTodoForm'

export function AddTodoForm() {
    const { text, handleSubmit, handleChange } = useAddTodoForm()
    const isDisabled = !text.trim()

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledInput
                type="text"
                value={text}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
                placeholder="Добавить новую задачу"
            />
            <StyledButton type="submit" disabled={isDisabled}>
                Добавить
            </StyledButton>
        </StyledForm>
    )
}
