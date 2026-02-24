import { Provider } from 'react-redux'
import { store } from '@app/store'
import { TodoList } from '@widgets/todo-list'
import { StyledApp, StyledTitle } from './App.styled'
import './index.css'

export function App() {
    return (
        <Provider store={store}>
            <StyledApp>
                <StyledTitle>Todo List</StyledTitle>
                <TodoList />
            </StyledApp>
        </Provider>
    )
}
