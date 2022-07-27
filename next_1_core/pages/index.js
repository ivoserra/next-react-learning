import Link from 'next/link';

// import styles from '../styles/Home.module.css'

// links and navigating.
// a tags have a disadvantage is that standards links we send brand new http request to load the page which mean any application state we have will be lost.
// the link has other futures like hovering , we use from next automatic pre-fetches any data off the page we might navigate as soon we hover it.


export default function HomePage(){

  
  return (
    <div>
      <h1>Homepage</h1>
      <ul>
        <li>
            <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
            <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  
  )
}
