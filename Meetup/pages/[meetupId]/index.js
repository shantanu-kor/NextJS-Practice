import { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
    const { image, title, address, description } = props.meetupData;
    return (
        <MeetupDetail image={image} title={title} address={address} description={description} />
    )
};

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            { params: {
                meetupId: 'm1',
            }},
            { params: {
                meetupId: 'm2',
            }},
            { params: {
                meetupId: 'm3',
            }},
        ]
    }
}

export async function getStaticProps(context) {
    
    const meetupId = context.params.meetupId;

    console.log(meetupId);

    return {
        props: {
            meetupData: {
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1600px-Stadtbild_M%C3%BCnchen.jpg?20130611211153",
                id: meetupId,
                title: "A First Meetup",
                address: "Some address 5, 12345 Some City",
                description: "This is the first Meetup",
            }
        }
    }
}

export default MeetupDetails;