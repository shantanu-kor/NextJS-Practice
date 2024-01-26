import { MongoClient } from "mongodb";


async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://Shantanu:<password>@cluster0.s43psut.mongodb.net/todos?retryWrites=true&w=majority')
        const db = client.db();

        const meetupsCollection = db.collection('todos');
        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: 'Todo inserted!' });
    }
};

export default handler;