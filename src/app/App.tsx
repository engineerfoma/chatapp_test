import { Provider } from 'react-redux'
import { store } from '@app/store'
import './index.css'

export function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <h1>Todo List App</h1>
            </div>
        </Provider>
    )
}
