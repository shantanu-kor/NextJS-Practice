import { Fragment } from "react";

function TodoList(props) {
    const todos = props.todos;
    const ongoingTodos = todos.filter(todo => todo.completed === false);
    const finishedTodos = todos.filter(todo => todo.completed === true);
    return (
        <Fragment>
            <h2>Ongoing Todos</h2>
            <ol>
                {ongoingTodos.map(todo => <li>{todo.todo}</li>)}
            </ol>
            <br />
            <h2>Completed Todos</h2>
            <ol>
                {finishedTodos.map(todo => <li>{todo.todo}</li>)}
            </ol>
        </Fragment>
    )
};

export default TodoList;