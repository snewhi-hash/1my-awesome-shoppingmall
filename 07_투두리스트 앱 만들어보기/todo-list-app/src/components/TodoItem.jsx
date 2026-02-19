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
        <div className="bg-white border-l-4 border-purple-500 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition duration-200">
            <div className="p-4">
                <div className="flex items-center gap-3">
                    <input 
                        type="checkbox" 
                        checked={todo.completed} 
                        onChange={() => toggleTodo(todo.id)}
                        className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500 cursor-pointer"
                    />
                    
                    {isEditing ? (
                        <input
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className="flex-1 px-3 py-2 border border-purple-500 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            autoFocus
                        />
                    ) : (
                        <span className={`flex-1 text-lg ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                            {todo.text}
                        </span>
                    )}
                    
                    <div className="flex gap-2">
                        {isEditing ? (
                            <>
                                <button 
                                    onClick={handleEdit} 
                                    className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
                                    title="저장"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <button 
                                    onClick={handleCancel} 
                                    className="p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
                                    title="취소"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </>
                        ) : (
                            <>
                                <button 
                                    onClick={() => setIsEditing(true)} 
                                    className="p-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition duration-200"
                                    title="수정"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                    </svg>
                                </button>
                                <button 
                                    onClick={() => deleteTodo(todo.id)} 
                                    className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
                                    title="삭제"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;