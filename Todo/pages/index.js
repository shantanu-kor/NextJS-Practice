import { Fragment } from "react";
import { MongoClient } from "mongodb";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function HomePage(props) {
    async function submitHandler(todo) {
        const response = await fetch('/api/new-todo', {
            method: 'POST',
            body: JSON.stringify({ todo, completed: false }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = await response.json();

        console.log(data);
    };

    return (
        <Fragment>
            <TodoForm onSubmitForm={submitHandler} />
            <TodoList todos={props.todos} />
        </Fragment>
    )
};

export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://Shantanu:<password>@cluster0.s43psut.mongodb.net/todos?retryWrites=true&w=majority')
    const db = client.db();

    const meetupsCollection = db.collection('todos');
    const result = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            todos: result.map(todo => ({
                todo: todo.todo,
                completed: todo.completed,
                id: todo._id.toString(),
            })),
        },
        revalidate: 1,
    };
};


export default HomePage;