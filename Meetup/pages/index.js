import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1600px-Stadtbild_M%C3%BCnchen.jpg?20130611211153',
        address: 'Some address 5, 12345 Some City',
        description: 'This is the first Meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1600px-Stadtbild_M%C3%BCnchen.jpg?20130611211153',
        address: 'Some address 10, 123 Some City',
        description: 'This is the second Meetup!'
    },
    {
        id: 'm2',
        title: 'A Third Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1600px-Stadtbild_M%C3%BCnchen.jpg?20130611211153',
        address: 'Some address 10, 1235 Some City',
        description: 'This is the third Meetup!'
    },
];


function HomePage(props) {
    return <MeetupList meetups={props.meetups}/>
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
    return {
        props: {
            meetups: DUMMY_MEETUPS,
        },
        revalidate: 1,
    };
};

export default HomePage;