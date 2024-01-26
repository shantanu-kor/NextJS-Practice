import { Fragment } from "react";

function CompletedList(props) {
    const todos = props.todos;
    const finishedTodos = todos.filter(todo => todo.completed === true);

    return (
        <Fragment>
            <h2>Completed Todos</h2>
            <ol>
                {finishedTodos.map(todo => <li key={todo.id}>{todo.todo}</li>)}
            </ol>
        </Fragment>
    )
};

export default CompletedList;