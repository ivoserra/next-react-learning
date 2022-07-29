-------

### Page-Pre-rendering & data fetching

Static vs Server-side Page generation
how to fetch data with next.
themes : fs, path, 

#### Notes
data Fetching | next: Blending server-side and Client side code
page Pre-rendering (good for SEO!) next: pre-renders the page , html are fully populated that does not happen only with react.

two forms of pre-rendering: static generation or server side rendering

static : all pages are pre -generated in advance during build time.
server-side: pages are created after deployment upon a request reaches the server.

next js by default pre-renders all pages that have not dynamic data
<br>

##### Static Generation
Pre-generate a page (with data prepared on the server-side) during build time.
Pages are prepared ahead to time and can be cached by the server / CDN serving the app.

```
export async function getStaticProps(context){ ... }
```
whatever code we pass through this function it will never appear on the client side, like specific data that is secret.
<br>

#### Pre-generated Paths


```
export async function getStaticPaths() {...}

```


#### Incremental static Generation
Pre-generate Page -> Re-generate it on every request, at most every X seconds.

Either : Serve 'old' page if re-generation is not needed yet !
OR: Generate, store and serve 'new' page otherwise.

###### Get Server-SideProps, for server-side rendering (SSR)
2 ways of static generation and server-side generation, for dynamic pre-generated pages we do need both getStaticProps and getStaticPaths.

Sometimes, we need to pre-render for every request OR need access to the request Object(e.g we need to extract cookies)
Next allows us to run "real server-side code" as well,

for SSR we should use either getStaticProps or GetServerSideProps, they clash when together, they fulfill the same propouse, get props upon the request, but they run at different points of time.

this lesson example start at user-profile.js

``` 
export async function getServerSideProps(){...}

```

[nodejs req documentation ](https://nodejs.org/api/http.html#http_class_http_incomingmessage)

[nodejs res documentation](https://nodejs.org/api/http.html#http_class_http_serverresponse)


###### Client Side Data Fetching
Sometimes we have data that does not need or cannot  be pre-rendered.

 - Data changing with hight frequency (e.g stock data)
 - Highly user-specific data (e.g last orders in an online shop)
 - Partial Data (e.g data thats only used on a part of an page)

In this cases sometimes Pre-fetching the data for a page generation might not work or be required.
'Traditional' client-side daa fetching (e.g. useEffect with fetch is fine ). 

* For this we start  at the file last-sales.js

A Note About useSWR: 
This hook generally still works as explained, but there is one adjustment you'll have to make.
You must now add a default "fetcher" when working with useSWR:

```
useSWR(<request-url>, (url) => fetch(url).then(res => res.json()))

```

[useSWR documentation](https://swr.vercel.app/)

[fetcher getting started](https://swr.vercel.app/docs/getting-started)

The details will be explained in the next lecture, but if you run into issues using this hook, make the change mentioned above!


### Ivo Serra 28th July 2022
-------