import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, editTodo, deleteTodo }) => {
    if (todos.length === 0) {
        return (
            <div className="text-center py-12">
                <svg className="mx-auto h-24 w-24 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <p className="mt-4 text-xl font-medium text-gray-600">할 일이 없습니다!</p>
                <p className="mt-2 text-gray-400">새로운 할 일을 추가해보세요.</p>
            </div>
        );
    }

    return (
        <div className="space-y-3 max-h-96 overflow-y-auto">
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo}
                    toggleTodo={toggleTodo}
                    editTodo={editTodo} 
                    deleteTodo={deleteTodo} 
                />
            ))}
        </div>
    );
};

export default TodoList;