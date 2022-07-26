import { useRouter } from 'next/router';



    // this is a catch all path we defined with the spread operator. it will return an array in the routerQuery
    // we can use does values inside of the array to make request to our database with those same values
    // we can code whatever we want in the browser and the catch all will catch those values.
    // these are dynamic paths not only the individuals segment values but also the number of segments are dynamic

export default function BlogPostsPage(){

    const router = useRouter()
    // console.log(router.query)



    return(
        <div>
            <h1>
                The blog Posts
            </h1>
        </div>
    )
}