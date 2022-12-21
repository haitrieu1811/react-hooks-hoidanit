import { useState } from 'react';

const Todo = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([
        { id: 1, title: 'Do homework', type: 'rumble' },
        { id: 2, title: 'Listen english', type: 'rumble' },
        { id: 3, title: 'Washing Shirt', type: 'abc' },
    ]);

    const handleCreate = (e) => {
        e.preventDefault();

        setTodos([{ id: Math.random() * 10000, title: todo, type: 'rumble' }, ...todos]);
        setTodo('');
    };

    const handleChangeInput = (e) => {
        setTodo(e.target.value);
    };

    const handleDelete = (todoId) => {
        const newTodos = todos.filter((todo) => todo.id !== todoId);
        setTodos(newTodos);
    };

    return (
        <>
            <h1>Todo Page</h1>

            {todos && todos.length > 0 && (
                <>
                    <form onSubmit={(e) => handleCreate(e)}>
                        <input type="text" value={todo} onChange={(e) => handleChangeInput(e)} />
                        <button type="submit">Add</button>
                    </form>

                    <ul>
                        {todos.map((todo) => (
                            <li key={todo.id}>
                                {todo.title}{' '}
                                <button type="button" onClick={() => handleDelete(todo.id)}>
                                    X
                                </button>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );
};

export default Todo;
