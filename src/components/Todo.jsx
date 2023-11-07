import { useState, useEffect } from "react";
import { toggleTodo, updateTodo, deleteTodo } from "../redux/actions"
import { useDispatch } from "react-redux"

const Todo = ({ todo }) => {

    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo.data);

    const dispatch = useDispatch();

    useEffect(() => {
        setText(todo.data);
    }, [todo.data]);

    const onFormSubmit = (e) => {
        e.preventDefault();

        setEditing(prevState => !prevState);

        dispatch(updateTodo(todo._id, text))
    }

    return (
        <li
            className="task"
            onClick={() => dispatch(toggleTodo(todo._id))}   
            style={{
                textDecoration: todo.done ? "line-through" : "",
                color: todo.done ? "#fff" : "#5C469C",
                backgroundColor: todo.done ? "#0C134F" : "#5C469C",
            }} 
        >
            <span style={{ display: editing ? 'none' : '' }}>{todo.data}</span>

            <form
                style={{ display: editing ? 'inline' : 'none' }}
                onSubmit={onFormSubmit}
            >
                <input 
                    type="text"
                    value={text}
                    className="edit-todo"
                    onChange={(e) => setText(e.target.value)}
                />
            </form>

            <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
                <i className="fa fas fa-trash" />
            </span>
            <span className="icon" onClick={() => setEditing(prevState => !prevState)}>
                <i className="fa fas fa-pen" />
            </span>
        </li>
    );
};

export default Todo;
