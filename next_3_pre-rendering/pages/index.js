import fs from 'fs/promises'; 
// fs is a core of the node modules, we dont need to import. fs/promises return a promise
import path from 'path';
// also from node module
import Link from 'next/link';


function HomePage(props){

  const { products } = props

  return(
    <ul>
      {products.map(product => <li key={product.id}><Link href={`/${product.id}`}>{product.title}</Link></li>)}
    </ul>
  )
}

// prepares the props for our component. A getStaticProps  will first execute the function and second execute the component.
// first prepares the props and then renders the component. this code is not showed on the client side, we can use credentials.
// this code is executed on the server side or with sever side capabilities. this means we can work with a file system.

export async function getStaticProps(){
  console.log('(Re-)Generating...')
// cwd mean current working directory of this code file when is executed. This is an absolute path to the file
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');

  // we use await since fs.readFile is a promise.
 const jsonData = await fs.readFile(filePath)
 const data = JSON.parse(jsonData);


 //*********/
 // this are special options we dont have to use them here , just to show how to use them, and they are 
 // also handy in special situations. 
 // Usually they can be found in the return, check the keys after revalidate.

 if(!data){
  return{
    redirect:{
      destination: './no-data'
    }
  }
 }

 if (data.products.length === 0) {
    return { notFound: true};
    // tis will turn a 404 page next builds for us. 
  }


// ********/

  return{

    props: {
      products: data.products
    },
    revalidate: 10, 
    // in production this number matters. its every second the page will be revalidated ideally for static pages where data does not change that much.
    // for dynamic pages revalidate should be 1, since daa is changing all the time.
    // notFound:
    // redirect:
    
  }
}

export default HomePage