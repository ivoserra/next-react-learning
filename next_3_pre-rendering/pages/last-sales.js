// CLIENT SIDE DATA FETCHING
// in the view source page please not that the only information is printed is No Sales yet !
// This happens because The page is still pre-render by NEXT in this case is the default :
//  a page that does not use getServerSideprops will be pre-render by next js.
// the key here is that the data used by this page will not be prepared with nextjs with getstaticprops for example.
// when next pre-renders the page will not execute the useEffect, it will no wait or care for it. 
// It will just return the pre-rendered basic first version of what the component returns  and that is:
// ?  "no sales yet" and that is the initial state of this page and this is what gets pre-rendered.


import { useEffect, useState } from "react"
import useSWR from "swr"

// firebase api only returns objects and not an array
export default function LastSalesPage(props){

    const [ sales, setSales ] = useState(props.sales);
    // const [ isLoading, setIsLoading ] = useState(false)

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR('https://next-js-course-f1136-default-rtdb.firebaseio.com/sales.json', fetcher)
    

    // firebase api only returns objects and not an array, lets prepare the data for the component
    useEffect(() => {
      if (data) {
        const transformedSales=[];
        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        setSales(transformedSales);
        // console.log(sales)
      }
    }, [data]);


    // useEffect(()=>{
    //     setIsLoading(true)
    //     fetch('https://next-js-course-f1136-default-rtdb.firebaseio.com/sales.json', fetcher)
    //     .then(response => response.json())
    //     .then(result => {
    //         // data that we fetch from firebase is in the form of an object.
    //         const transformedData = []
    //         for(const key in result){
    //             transformedData.push({
    //                 id:key, username: result[key].username, volume: result[key].volume
    //             })
    //         }
    //         setSales(transformedData)
           
    //         console.log('sales', sales)
    //         setIsLoading(false)

    //     })

    // },[])

    if(!data && !sales){
        return <p>Loading...</p>
    }

    if(error){
        return <p>No sales yet!</p>
    }

    // console.log(data)

    return(

        <ul>
            {sales.map(sale => <li key={sale.id}>{sale.username} - ${sale.volume}</li>)}
        </ul>
    );
}


 //  113. Combining Server side Pre-fetching with client-side data fetching.
 // in this example is not necessary but its good to have for other kinds of applications

export async function getStaticProps(){
  // we cannot use the SWR hook, because this is not a react component function there for we need to fetch normally.
  const response = await fetch(
    "https://next-js-course-f1136-default-rtdb.firebaseio.com/sales.json"
  );
  const data = await response.json();
  const transformedSales = [];

  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }
  return { props: { sales: transformedSales } };
}