import { getFeaturedEvents } from '../dummy-data'
import EventList from '../components/events/EventList';

// this is the page that holds the home page example: localhost/

export default function HomePage(){

    const featuredEvents = getFeaturedEvents();

    return(
        <div>
            <EventList items={featuredEvents}/>
        </div>
    )
}