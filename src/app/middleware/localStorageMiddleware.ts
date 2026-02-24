import { Middleware } from '@reduxjs/toolkit'
import { saveTodosToStorage } from '@shared/lib/localStorage'
import { TodoState } from '@entities/todo'

export const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
    const result = next(action)
    const state = store.getState() as { todo: TodoState }
    
    saveTodosToStorage(state.todo)
    
    return result
}
