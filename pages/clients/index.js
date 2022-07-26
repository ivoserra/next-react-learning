import Link from 'next/link'

// Navigating to dynamic pages 
// two different ways of building links. the first example in line 15 is not coded is the normal react way with `/clients/${client.id}`
// second example is the one is coded using the query we used with router.query example. 

// NAVIGANTING PROGRAMATICALLY

export default function ClientsPage(){

    const clients = [{id:'max', name:"Maximilian"}, { id:'manu', name:'Manuel'}]

    return(
        <div>
            <h1>The Clients Page</h1>
            <ul>
                {clients.map((client) => (
                    <li key={client.id}><Link href={{pathname:'/clients/[id]', query:{ id:client.id }}}>{client.name}</Link></li>
                    
                ))}
            </ul>
        </div>
    )
}