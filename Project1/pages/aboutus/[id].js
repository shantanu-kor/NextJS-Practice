import { useRouter } from 'next/router';

const details = [{ id: 1, name: 'Yash', role: 'Senior Developer' }, { id: 2, name: 'Vaibhav', role: 'Backend Developer' }, { id: 3, name: 'Suresh', role: 'Frontend Developer' },]

function MyDetails() {
    const router = useRouter();
    const id = Number(router.query.id);
    const person = details.filter(item => item.id === id);
    if (person.length > 0) {
        return <h1>My name is {person[0].name} and I am a {person[0].role}.</h1>
    } else {
        return <h1>Person does not exist</h1>
    }
    
};

export default MyDetails;