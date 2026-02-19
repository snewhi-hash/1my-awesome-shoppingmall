import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, editTodo, deleteTodo }) => {
    if (todos.length === 0) {
        return <div className="empty-message">할 일이 없습니다! 새로운 할 일을 추가해보세요.</div>;
    }

    return (
        <div className="todo-list">
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