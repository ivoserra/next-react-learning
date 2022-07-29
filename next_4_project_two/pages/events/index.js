import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import EventList from '../../components/events/EventList';
import EventsSearch from "../../components/events/events-search";
 
 export default function AllEventsPage(){
    const router = useRouter();
    const events = getAllEvents();
   

    function findEventsHandler(year, month){
        const fullPath=`/events/${year}/${month}`;
        router.push(fullPath);
    }

    return(
        <>
            <EventsSearch onSearch={findEventsHandler}/>
            <EventList items={events}/>
        </>
    );
 }