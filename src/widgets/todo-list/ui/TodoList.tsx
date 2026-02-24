import { useAppSelector } from '@shared/lib/redux'
import { TodoItem } from '@entities/todo'
import { AddTodoForm } from '@features/add-todo'

export function TodoList() {
    const todos = useAppSelector((state) => state.todo.todos)

    return (
        <div className="todo-list">
            <AddTodoForm />
            <div className="todos-container">
                {todos.length === 0 ? (
                    <p className="empty-message">Список задач пуст</p>
                ) : (
                    todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
                )}
            </div>
        </div>
    )
}
