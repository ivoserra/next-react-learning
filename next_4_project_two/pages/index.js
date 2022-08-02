import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/EventList';

// this is the page that holds the home page example: localhost/

export default function HomePage(props){


    return(
        <div>
            <EventList items={props.events}/>
        </div>
    )
}



export async function getStaticProps(){
    const featuredEvents = await getFeaturedEvents();

    return {
        props: {
            events: featuredEvents,
        },
        revalidate:1800,
    }
}