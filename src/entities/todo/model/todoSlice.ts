import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo, TodoState } from './types'



const initialState: TodoState = {
    todos: [],
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Omit<Todo, 'id' | 'createdAt'>>) => {
            const newTodo: Todo = {
                ...action.payload,
                id: Date.now().toString(),
                createdAt: Date.now(),
            }
            state.todos.push(newTodo)
        },
        toggleTodo: (state, action: PayloadAction<string>) => {
            const todo = state.todos.find((t) => t.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((t) => t.id !== action.payload)
        },
        updateTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
            const todo = state.todos.find((t) => t.id === action.payload.id)
            if (todo) {
                todo.text = action.payload.text
            }
        },
    },
})

export const { addTodo, toggleTodo, deleteTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer
