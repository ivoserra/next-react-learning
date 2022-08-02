
import { Fragment } from 'react';

import { getEventById, getFeaturedEvents} from '../../helpers/api-util';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics.js';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

// React fragments serve as a cleaner alternative to using unnecessary divs in our code. 
// These fragments do not produce any extra elements in the DOM, which means that a fragment’s child components will 
// render without any wrapping DOM node. 
// React fragments enable us to group multiple sibling components without introducing any unnecessary markup in the rendered HTML.
// Finally, you can create a React fragment on the fly using the shorthand syntax to wrap components using an empty HTML element like 
// syntax, <></>. This is the cleanest and easiest way to use fragments; it almost feels like you’re using a regular HTML element:

export default function EventDetailPage(props){
    const event = props.selectedEvent;

    if(!event){
        return <div className='center'><p>Loading...</p></div>;
    }

    return(
       <Fragment>
        <EventSummary title={event.title}/>
        <EventLogistics data={event}/>
        <EventContent>
            <p>{event.description}</p>
        </EventContent>
       </Fragment>
    )
}


export async function getStaticProps(context){
    const eventId = context.params.eventId;
    const event = await getEventById(eventId);

    return {
        props:{
            selectedEvent : event        
        },
        revalidate:30,
    };
}

export async function getStaticPaths(){

    const events = await getFeaturedEvents();
    const paths = events.map(event => ({ params: { eventId:event.id }}))

    return {
       paths: paths,
       fallback: 'blocking' // or true
    };
}