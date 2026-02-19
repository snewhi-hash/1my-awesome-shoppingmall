import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false
        };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const editTodo = (id, newText) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, text: newText } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const filteredTodos = todos.filter(todo => 
        todo.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="app">
            <h1>📝 투두리스트</h1>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <TodoForm addTodo={addTodo} />
            <TodoList 
                todos={filteredTodos} 
                toggleTodo={toggleTodo}
                editTodo={editTodo} 
                deleteTodo={deleteTodo} 
            />
            <div className="stats">
                전체: {todos.length} | 완료: {todos.filter(t => t.completed).length}
            </div>
        </div>
    );
};

export default App;