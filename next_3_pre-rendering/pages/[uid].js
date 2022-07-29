


export default function UserIdPage(props){

    return <h1>{props.id}</h1>
}


export async function getServerSideProps(context) {

    // Next cannot have two slugs sharing the same path.otherwise NEXT does not know which one to use.
    // we have moved [pid] to the path of the products folder/ page. Tis works without us adding a static paths, because this runs in the server anyways.
    // So next does not pre-generates any pages and it does not need to know what pages are available.
    // Because we run the server-side in every request, so there is no pre-generation and no need to pre-define dynamic paths in advance. 


    const { params } = context;
    const userId = params.uid;

    return {

        props: {
            id: 'userid-' + userId
        }

    }
}


