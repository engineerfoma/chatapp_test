import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '@shared/lib/redux'
import { TodoItem } from '@entities/todo'
import { AddTodoForm } from '@features/add-todo'
import { TodoFilter, FilterType } from '@features/filter-todos'
import { StyledTodoList, StyledTodosContainer, StyledEmptyMessage } from './TodoList.styled'
import { useFilteredTodos } from '../lib/useFilteredTodos'
import { getEmptyMessage } from '../lib/getEmptyMessage'
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { reorderTodos } from '@entities/todo'

export function TodoList() {
    const [filter, setFilter] = useState<FilterType>('all')
    const todos = useAppSelector((state) => state.todo.todos)
    const filteredTodos = useFilteredTodos(todos, filter)
    const dispatch = useAppDispatch()

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event

        if (over && active.id !== over.id) {
            dispatch(reorderTodos({
                activeId: active.id as string,
                overId: over.id as string,
            }))
        }
    }

    return (
        <StyledTodoList>
            <AddTodoForm />
            {todos.length > 0 && (
                <TodoFilter currentFilter={filter} onFilterChange={setFilter} />
            )}
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={filteredTodos.map(t => t.id)} strategy={verticalListSortingStrategy}>
                    <StyledTodosContainer>
                        {filteredTodos.length === 0 ? (
                            <StyledEmptyMessage>
                                {getEmptyMessage(todos.length, filter)}
                            </StyledEmptyMessage>
                        ) : (
                            filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
                        )}
                    </StyledTodosContainer>
                </SortableContext>
            </DndContext>
        </StyledTodoList>
    )
}
