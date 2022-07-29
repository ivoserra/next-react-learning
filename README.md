## Learning Nextjs with React (inl 2 paths)
#### udemy workshop  with Maximilian Schwarzmüller.

<br>
Im learning Next.js with React. I created this repository for my learning process.

This is my diary and a brief description of each step. 


[more info about the workshop](https://www.udemy.com/course/nextjs-react-the-complete-guide/)

------ 

### next_1_core
This is where I learn the fundamentals of Next.JS and dynamic router.
topics: useRouter, router.query, [...slug] and Link.

#### July 26th 2022.

------

### project_one : implementing  next_1_core with React components > section 4
A live coding with the teacher combining Next.js and React components.
This project is not about styling. Some personal adjustments to the code and logic in props for personal reasons. 
Some annotations can be found.

topics: dummy data, Fragment, Filtered component *** , classes.module.css.

[ ref to the parsing error](https://namespaceit.com/blog/parsing-error-cannot-find-module-next-babel)

#### July 27th 2022.

-------

### Pre-rendering & data fetching

Static vs Server-side Page generation
how to fetch data with next.


##### Static Generation
Pre-generate a page (with data prepared on the server-side) during build time.
Pages are prepared ahead to time and can be cached by the server / CDN serving the app.

```
export async function getStaticProps(context){ ... }
```

###### Incremental static Generation
Pre-generate Page -> Re-generate it on every request, at most every X seconds.

Either : Serve 'old' page if re-generation is not needed yet !
OR: Generate, store and serve 'new' page otherwise.

#### Pre-generated Paths

```
export async function getStaticPaths() {...}

```

#### Incremental static Generation
Pre-generate Page -> Re-generate it on every request, at most every X seconds.


###### Get Server-SideProps, for server-side rendering (SSR)
2 ways of static generation and server-side generation, for dynamic pre-generated pages we do need both getStaticProps and getStaticPaths...

``` 
export async function getServerSideProps(){...}

```


###### Client Side Data Fetching
Firebase API
useSWR hook


```
useSWR(<request-url>, (url) => fetch(url).then(res => res.json()))

```


###### Combining Server side Pre-fetching with client-side data fetching.

#### July 29th 2022

-------
<br>

## Ivo Serra . from 26th July-> .... 2022


<br>
