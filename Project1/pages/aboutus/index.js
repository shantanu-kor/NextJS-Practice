import Link from "next/link";
import { Fragment } from "react";

const details = [{ id: 1, name: 'Yash', role: 'Senior Developer' }, { id: 2, name: 'Vaibhav', role: 'Backend Developer' }, { id: 3, name: 'Suresh', role: 'Frontend Developer' },]

function AboutUsPage() {
    return (
        <Fragment>
            <h1>The About Us Page</h1>
            <ul>
                {details.map(item => <li><Link href={`/aboutus/${item.id}`}>{item.name}</Link></li>)}
            </ul>
        </Fragment>
    )
};

export default AboutUsPage;