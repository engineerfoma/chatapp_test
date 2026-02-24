import { TodoState } from '@entities/todo'

const STORAGE_KEY = 'todos'

export const loadTodosFromStorage = (): TodoState | undefined => {
    try {
        const serializedState = localStorage.getItem(STORAGE_KEY)
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (error) {
        console.error('Error loading todos from localStorage:', error)
        return undefined
    }
}

export const saveTodosToStorage = (state: TodoState): void => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem(STORAGE_KEY, serializedState)
    } catch (error) {
        console.error('Error saving todos to localStorage:', error)
    }
}
