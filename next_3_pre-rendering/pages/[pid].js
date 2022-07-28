import path from 'path';
import fs from 'fs/promises';


function ProductDetailPage(props){

    const { loadedProduct } = props;

    return(
        <>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.description}</p>
        </>
    )
}

// this function now instead of returning the all data, we want to read the file and return one product.THIS IS THE DIFFERENCE

export async function getStaticProps(context){
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

export async function getStaticPaths(context) {
  // PRE -Generated Paths (Routes)
  // Dynamic pages ([id].js) etc dont just need data: You also need to know which [id] values will be available
  // Multiple concrete [id] page instances (e.g. id = 1, id = 2, id = 3) are pre-generated.
  // export async function getStaticPaths() {...}
  // this is required since tells next which concrete instances of this dynamic page must be pre-generated

  return {
    paths: [
      { params: { pid: "p1" } },
      { params: { pid: "p2" } },
      { params: { pid: "p3" } },
    ],
    // 
    fallback: false,
  };
}


export default ProductDetailPage;


