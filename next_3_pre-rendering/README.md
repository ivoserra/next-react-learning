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


###### Incremental static Generation
Pre-generate Page -> Re-generate it on every request, at most every X seconds.

Either : Serve 'old' page if re-generation is not needed yet !
OR: Generate, store and serve 'new' page otherwise.



### Ivo Serra 28th July 2022
-------