import { MongoClient } from "mongodb";
import CompletedList from "../../components/CompletedList";
import { Fragment } from "react";
import Link from "next/link";

function CompletedPage(props) {
    return (
        <Fragment>
            <CompletedList todos={props.todos} />
            <Link href='/'>Home</Link>
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


export default CompletedPage;