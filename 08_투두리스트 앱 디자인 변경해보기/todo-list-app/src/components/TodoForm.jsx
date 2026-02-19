import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim()) {
            addTodo(inputValue.trim());
            setInputValue('');
        }
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="새로운 할 일을 입력하세요..."
                className="todo-input"
            />
            <button type="submit" className="add-button">추가</button>
        </form>
    );
};

export default TodoForm;