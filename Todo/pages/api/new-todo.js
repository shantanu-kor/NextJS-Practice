import { MongoClient, ObjectId } from "mongodb";


async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://Shantanu:<password>@cluster0.s43psut.mongodb.net/todos?retryWrites=true&w=majority')
        const db = client.db();

        const todosCollection = db.collection('todos');
        const result = await todosCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: 'Todo inserted!' });
    }
    else if (req.method === 'PUT') {
        const { id, todo, completed } = req.body;
        const client = await MongoClient.connect('mongodb+srv://Shantanu:<password>@cluster0.s43psut.mongodb.net/todos?retryWrites=true&w=majority')
        const db = client.db();

        const todosCollection = db.collection('todos');

        const result = await todosCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: { todo, completed } }
        );

        client.close();

        res.status(200).json(result);
    }
    else if(req.method === 'DELETE') {
        
        const { id } = req.body;
        const client = await MongoClient.connect('mongodb+srv://Shantanu:<password>@cluster0.s43psut.mongodb.net/todos?retryWrites=true&w=majority')
        const db = client.db();

        const todosCollection = db.collection('todos');

        const result = await todosCollection.deleteOne(
            { _id: new ObjectId(id) },
        );

        client.close();

        res.status(200).json(result);
    }
};

export default handler;