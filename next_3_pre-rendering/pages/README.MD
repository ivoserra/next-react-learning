 // this is the document before being refactored.  

// import path from 'path';
// import fs from 'fs/promises';


 * function ProductDetailPage(props){

    const { loadedProduct } = props;

     // in relation to the fallback in the getStaticPaths function
     if(!loadedProduct){
         return <p>Loading...</p>
     }

     return(
         <>
             <h1>{loadedProduct.title}</h1>
             <p>{loadedProduct.description}</p>
         </>
     )
 }


 // this function now instead of returning the all data, we want to read the file and return one product.THIS IS THE DIFFERENCE

  * export async function getStaticProps(context){
   // params is an object from next js full of key value pairs.identifiers for the product
   // there is a difference using params to router.query in static props.
   // to render the data before the server, we use params for the Dynamic parameters of that data.
   // preparing a page on the server or build getStaticProps needs get access to the params a dynamic path inside the static props and prepare the data here for the component
   const { params } = context;
   const productId = params.pid;

   const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
   const jsonData = await fs.readFile(filePath);
   const data = JSON.parse(jsonData);
   const product = data.products.find((product) => product.id === productId);

   return {
     props: {
       loadedProduct: product,
     },
   };
}

* export async function getStaticPaths(context) {

PRE -Generated Paths (Routes)
Dynamic pages ([id].js) etc dont just need data: You also need to know which [id] values will be available
Multiple concrete [id] page instances (e.g. id = 1, id = 2, id = 3) are pre-generated.
this is required since tells next which concrete instances of this dynamic page must be pre-generated

   return {
     paths: [
       { params: { pid: "p1" } },
    uncomment only for fallback false
        { params: { pid: "p2" } },
        { params: { pid: "p3" } },
            ],

    1. working with Fallback pages
    fallback key helps if we have many pages that need to pre-generated. pre-generating millions of pages may take super long.
    there might be pages that are rarely visited like in a blog. Pre-generating those pages will be a waist of resources and time.
    fallback becomes important when set it to true to pre-render some pages and still we are able to render pages that are not declared to be pre-generated.
    FALLBACK TRUE we tell next to pre-generate the pages that are not listed can be valid to be loaded when visited. 
    They are not pre-generated, but generated just in time when the request reach the server.
    there is a problem here, if we type on the browser for the product it will  come as undefined and therefor we need to create a condition on the component.
    that will present a loading and this will perform as the standard react. the product will appear because of the fallback feature. 

        fallback: "blocking" // with this we dont even need the condition in the component, it just takes a bit longer to load the page.
      fallback: false,
     fallback: true,
   };
 }


export default ProductDetailPage;


