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
        reorderTodos: (state, action: PayloadAction<{ activeId: string; overId: string }>) => {
            const { activeId, overId } = action.payload
            const oldIndex = state.todos.findIndex((t) => t.id === activeId)
            const newIndex = state.todos.findIndex((t) => t.id === overId)

            if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
                const [removed] = state.todos.splice(oldIndex, 1)
                state.todos.splice(newIndex, 0, removed)
            }
        },
    },
})

export const { addTodo, toggleTodo, deleteTodo, updateTodo, reorderTodos } = todoSlice.actions
export default todoSlice.reducer
