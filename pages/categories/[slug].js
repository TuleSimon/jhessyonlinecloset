import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import Head from 'next/head'
import { AiFillHome } from 'react-icons/ai'
import { BiCategory } from 'react-icons/bi'
import { BreadCrumb,HorizontalDivider,MasonryLayout,Search, Select, Sort } from '../../components'
import { getCategories, getCategory, getFloorsByCategory } from '../../services'
import { useRouter } from 'next/router'

function Category({categorys,products}) {  

  const myRef = useRef()
  const router = useRouter()

  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: 'smooth' })
    if(categorys==undefined || categorys.slug==undefined){
      router.push('/404')
  }
  }, [])

  
  
  const {id,  image,  name, slug, description} = categorys?categorys:{}
  const [floorss, setFloors] = useState(products);
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)

  const get = async function (){
    const products = await getFloorsByCategory("name_ASC",slug,"",page)
    setFloors(products)
  }

  useEffect(() => {
    get()
    myRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [page])
  

    const routes =  [{"title":"Home", "href":"/","Iconn":AiFillHome},
    { "title":"Category", "href":`/categories`,"Iconn":BiCategory},
    { "title":slug, "href":`/category/${slug}`,"Iconn":BiCategory}]


  return (
    <div className="w-full place-content-center flex flex-col place-items-center">
      <Head>
        <title>{name?name:"Loading"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Head>
        <meta property="og:title" content={name?name:"Loading"} key="title" />
      </Head>
        <BreadCrumb routes={routes}/>
        {/* header */}
        <div
  className="p-12 w-full text-center relative overflow-hidden bg-no-repeat bg-cover h-96 rounded-lg" ref={myRef}
>
  <img src={image?.url} width="100%" className="object-cover absolute top-0 left-0 right-0 w-full " />
  <div
     className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed shop_overlay"
  >
    <div  className="flex justify-center items-center h-full">
      <div  className="text-white">
        <h2  className="font-black text-6xl mb-4">{name}</h2>
        <h4  className="font-semibold text-md px-6 line-clamp-2 md:line-clamp-3 mb-6">{description}</h4>
      </div>
    </div>
  </div>
</div>
  <Sort search={search} setSearch={setSearch}  setFloors={setFloors} category="true" slug={slug}/>
<h1 className='text-xl font-bold uppercase mt-2'>OUR PRODUCTS</h1>
<HorizontalDivider style="mb-4 place-self-center w-full grow"/>
<MasonryLayout page={page} setPage={setPage} 
count={floorss?.productsConnection?.aggregate?.count} floors={floorss?floorss.productsConnection?.edges:{}} />

</div>
  )
}

export default Category


export async function getStaticProps({ params }) {
    
  const {category} = await getCategory(params.slug);
  const products = await getFloorsByCategory("name_ASC",params.slug,"",1)
  if(category==undefined || category==null){
      return {
          notFound:true,
      }
  }
  return {
    props: {
      categorys: category,
      products:products
    },
  };
}

export async function getStaticPaths() {
  const {categories} = await getCategories();
  return {
    paths: categories?.map(( { slug } ) => ({ params: { slug } })),
    fallback: true,
  };
}