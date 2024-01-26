import { Fragment } from "react";

function TodoList(props) {
    function completedHandler(id, todo) {
        props.completeHandler(id, todo);
    };
    function deleteHandler(id) {
        props.deleteHandler(id);
    };
    const todos = props.todos;
    const ongoingTodos = todos.filter(todo => todo.completed === false);
    const finishedTodos = todos.filter(todo => todo.completed === true);
    return (
        <Fragment>
            <h2>Ongoing Todos</h2>
            <ol>
                {ongoingTodos.map(todo => <li key={todo.id}>{todo.todo} <button onClick={completedHandler.bind(null, todo.id, todo.todo)}>Completed</button><button onClick={deleteHandler.bind(null, todo.id)}>Delete</button></li>)}
            </ol>
            <br />
            <h2>Completed Todos</h2>
            <ol>
                {finishedTodos.map(todo => <li key={todo.id}>{todo.todo}</li>)}
            </ol>
        </Fragment>
    )
};

export default TodoList;