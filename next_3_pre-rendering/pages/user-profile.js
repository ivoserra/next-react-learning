


export default function UserProfilePage(props){

    return <h1>{props.username}</h1>

}


export async function getServerSideProps(context){

    // This function only executes on the server after deployment. 
    // Its not statically pre-generated.
    // but ... THIS has a couple of implications on the context argument.
    // like in other functions context arg we have access with params on this function.
    // instead we get access to the full object request and response object instead. This can be manipulated and we can add extra headers.
    // we do get a couple of values and key, params are also included. 
    // We dont need to worry about sending response, next will do this, but we can manipulate the response before, by adding extra headers, a cookie for example.
    // the only difference form the other get is the timing and the data we receive from the context arg.

    const { params, req, res } = context;

    console.log('server Side Code');
  
    
    return {

        props:{
            username:'Max'
        }
    };
}