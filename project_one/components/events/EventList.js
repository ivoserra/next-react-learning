import EventItem from './EventItem.js'

import classes from './event-list.module.css'

export default function EventList(props){

    const { items } = props

    return (
    <ul className={classes.list}>
        {items.map(event => <EventItem key={event.id} data={event}/>)}
    </ul>
    )
}

