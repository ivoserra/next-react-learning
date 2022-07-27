import { useRouter } from 'next/router';

export default function PortfolioProjectPage(){

    // this page will take any value we write on the browser. this is valid because of the [].js
    // this file is a placeholder for different pieces of data.
    // how to get access to that data ?  useRouter hook defined by next (its a react hook) for classes use withRouter

    const router = useRouter()

    // console.log(router.pathname)
    // console.log(router.query)
    
    // send a request to some backend server
    // to fetch the piece od data with an id of router.query.projectid

    return(
        <div>
            <h1>The Portfolio Project Page</h1>
        </div>
    )
}