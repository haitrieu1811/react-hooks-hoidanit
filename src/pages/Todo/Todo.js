import PropTypes from 'prop-types';

const Todo = ({ data, handleDelete }) => {
    return (
        <>
            {data && data.length > 0 && (
                <ul>
                    {data.map((todo) => (
                        <li key={todo.id}>
                            {todo.title}{' '}
                            <button type="button" onClick={() => handleDelete(todo.id)}>
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

Todo.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Todo;
