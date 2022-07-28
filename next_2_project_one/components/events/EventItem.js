
import Button from "../ui/button";
import DateIcon from "../icons/date-icon.js"
import AddressIcon from "../icons/address-icon.js"
import ArrowRightIcon from "../icons/arrow-right-icon";
import classes from './event-item.module.css';



export default function EventItem(props){
    const { data } = props

    const readableDate = new Date(data.date).toLocaleDateString('en-Us',{
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

    const formatAddress = data.location.replace(', ', '\n')

    const exploreLink = `/events/${data.id}`;
    // on src img the / is indicating the public folder where images are, we dont need to /public

    return(

        <li className={classes.item}>
            <img src={'/' + data.image} alt={data.title} />

            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{data.title}</h2>
                    <div className={classes.date}>
                    <DateIcon/>
                        <time>{readableDate}</time>
                    </div>
                    <div className={classes.address}>
                    <AddressIcon/>
                        <address>{formatAddress}</address>
                    </div>
                </div>

                <div className={classes.actions}>
                    <Button link={exploreLink}>
                    <span>Explore Event</span>
                    <span className={classes.icon}><ArrowRightIcon/></span>
                    </Button>
                </div>

            </div>
        </li>
    )
}