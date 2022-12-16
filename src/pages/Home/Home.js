import { useState } from 'react';

import Todo from '../Todo';

const Home = () => {
    const [name, setName] = useState('');
    const [todos, setTodos] = useState([
        { id: 1, title: 'Do homework', type: 'rumble' },
        { id: 2, title: 'Listen english', type: 'rumble' },
        { id: 3, title: 'Washing', type: 'abc' },
        { id: 4, title: 'Washing', type: 'abc' },
        { id: 5, title: 'Washing', type: 'abc' },
        { id: 6, title: 'Listen english', type: 'rumble' },
        { id: 7, title: 'Listen english', type: 'rumble' },
        { id: 8, title: 'Washing', type: 'abc' },
    ]);

    const handleClick = () => {
        setTodos([...todos, { id: Math.random() * 10000, title: name, type: 'rumble' }]);
        setName('');
    };

    const handleChangeInput = (e) => {
        setName(e.target.value);
    };

    const handleDeleteTodo = (todoId) => {
        const newTodos = todos.filter((todo) => todo.id !== todoId);
        setTodos(newTodos);
    };

    return (
        <>
            <h1>Home Page</h1>
            <input type="text" value={name} onChange={(e) => handleChangeInput(e)} /> <br /> <br />
            <button type="button" onClick={handleClick}>
                Click me !
            </button>
            <h3>All Todos</h3>
            <Todo data={todos} handleDelete={handleDeleteTodo} />
            <h3>Rumble Todos</h3>
            <Todo data={todos.filter((todo) => todo.type === 'rumble')} handleDelete={handleDeleteTodo} />
        </>
    );
};

export default Home;
