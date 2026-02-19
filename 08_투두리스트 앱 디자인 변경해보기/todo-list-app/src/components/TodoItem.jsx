import React, { useState } from 'react';

const TodoItem = ({ todo, toggleTodo, editTodo, deleteTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const handleEdit = () => {
        if (isEditing && editText.trim()) {
            editTodo(todo.id, editText.trim());
        }
        setIsEditing(!isEditing);
    };

    const handleCancel = () => {
        setEditText(todo.text);
        setIsEditing(false);
    };

    return (
        <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={() => toggleTodo(todo.id)}
                className="todo-checkbox"
            />
            
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="edit-input"
                    autoFocus
                />
            ) : (
                <span className={`todo-text ${todo.completed ? 'completed-text' : ''}`}>
                    {todo.text}
                </span>
            )}
            
            <div className="todo-actions">
                {isEditing ? (
                    <>
                        <button onClick={handleEdit} className="save-button">저장</button>
                        <button onClick={handleCancel} className="cancel-button">취소</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => setIsEditing(true)} className="edit-button">수정</button>
                        <button onClick={() => deleteTodo(todo.id)} className="delete-button">삭제</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default TodoItem;