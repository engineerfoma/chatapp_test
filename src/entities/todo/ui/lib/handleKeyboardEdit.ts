import { KeyboardEvent } from 'react'

interface KeyboardEditHandlers {
    onSave: () => void
    onCancel: () => void
}

export const handleKeyboardEdit = (
    e: KeyboardEvent<HTMLInputElement>,
    handlers: KeyboardEditHandlers
): void => {
    if (e.key === 'Enter') {
        handlers.onSave()
    } else if (e.key === 'Escape') {
        handlers.onCancel()
    }
}
