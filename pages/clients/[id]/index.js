
import { useRouter } from "next/router"



// NAVIGATING PROGRAMATICALLY
// Imperitive navigation

// router push to go to the next page, we can pass a string but also the same we done with the link.
// router.push('/clients/max/projecta');

// router replace means that we cannot go back after we replaced that page.
// router.replace('/clients/max/projecta')


export default function ClientProjectsPage(){

    const router = useRouter()
    console.log(router.query)

    
    function loadProjectHandler(){
        // load data...
        // router.push('/clients/max/projecta');
        router.push({pathname:'/clients/[id]/[clientprojectid]', query:{id:'max', clientprojectid:'projecta'}});

    }



    return(
        <div>
            <h1>The Projects of a given Client</h1>
            <button onClick={loadProjectHandler}>Load project A</button>
        </div>
    )
}