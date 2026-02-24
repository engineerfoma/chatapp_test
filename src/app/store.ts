import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from '@entities/todo'
import { loadTodosFromStorage } from '@shared/lib/localStorage'
import { localStorageMiddleware } from './middleware/localStorageMiddleware'

const preloadedState = (() => {
    const savedTodos = loadTodosFromStorage()
    if (savedTodos) {
        return {
            todo: savedTodos,
        }
    }
    return undefined
})()

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
    preloadedState,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
