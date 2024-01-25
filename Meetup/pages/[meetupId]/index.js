import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
    const { image, title, address, description } = props.meetupData;
    return (
        <MeetupDetail image={image} title={title} address={address} description={description} />
    )
};

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://Shantanu:EtWL2y3xwceHEAhy@cluster0.s43psut.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.find({}, { _id: 1 }).toArray();

    client.close();

    return {
        fallback: false,
        paths: result.map(meetup => ({ params: { meetupId: meetup._id.toString() } })),
    }
}

export async function getStaticProps(context) {

    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect('mongodb+srv://Shantanu:EtWL2y3xwceHEAhy@cluster0.s43psut.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const selectedMeetup = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) });



    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            },
        }
    }
}

export default MeetupDetails;