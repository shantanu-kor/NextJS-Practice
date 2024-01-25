import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList'

// const DUMMY_MEETUPS = [
//     {
//         id: 'm1',
//         title: 'A First Meetup',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1600px-Stadtbild_M%C3%BCnchen.jpg?20130611211153',
//         address: 'Some address 5, 12345 Some City',
//         description: 'This is the first Meetup!'
//     },
//     {
//         id: 'm2',
//         title: 'A Second Meetup',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1600px-Stadtbild_M%C3%BCnchen.jpg?20130611211153',
//         address: 'Some address 10, 123 Some City',
//         description: 'This is the second Meetup!'
//     },
//     {
//         id: 'm3',
//         title: 'A Third Meetup',
//         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1600px-Stadtbild_M%C3%BCnchen.jpg?20130611211153',
//         address: 'Some address 10, 1235 Some City',
//         description: 'This is the third Meetup!'
//     },
// ];


function HomePage(props) {
    return <MeetupList meetups={props.meetups} />
};

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     // fetch data from an API
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         },
//     };
// };

export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://Shantanu:EtWL2y3xwceHEAhy@cluster0.s43psut.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.find().toArray();

    client.close();
    
    return {
        props: {
            meetups: result.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(), 
            })),
        },
        revalidate: 1,
    };
};

export default HomePage;