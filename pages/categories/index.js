import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import { AiFillHome } from 'react-icons/ai'
import { BiCategory } from 'react-icons/bi'
import { BreadCrumb, HorizontalDivider} from '../../components'
import CategoriesCard from '../../components/category/CategoriesCard'
import { getCategories } from '../../services'

function Categories({categories}) {  

    const routes =  [{"title":"Home", "href":"/","Iconn":AiFillHome},
    { "title":"Category", "href":"/categories","Iconn":BiCategory}]


    const myRef = useRef()
useEffect(() => {
  myRef.current.scrollIntoView({ behavior: 'smooth' })
}, [])


  return (
    <div className="w-full  place-content-center flex flex-col place-items-center">
      <Head>
        <title>CATEGORIES</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Head>
        <meta property="og:title" content="CATEGORIES" key="title" />
      </Head>
        <BreadCrumb routes={routes} />
        {/* header */}
        <div ref={myRef}
  className="p-12 w-full text-center relative overflow-hidden bg-no-repeat bg-cover rounded-lg categories_header"
>
  <div
     className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed shop_overlay"
  >
    <div  className="flex justify-center items-center h-full">
      <div  className="text-white">
        <h2  className="font-black text-6xl mb-4">CATEGORIES</h2>
        <h4  className="font-semibold text-xl mb-6">EXPLORE OUR VARIETY OF PRODUCTS</h4>
      </div>
    </div>
  </div>
</div>


<section  className="mt-12 text-gray-800 flex flex-col mb-4">
    <h1 className='font-bold md:text-3xl text-xl w-full text-center'>Discover</h1>
    <HorizontalDivider style=" place-self-center"/>
    <div  className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-2 grid-cols-1 mt-8 px-2">
        {categories.map((category,index) => (
            <CategoriesCard key={index} category={category}/>
        ))}
    </div>
  </section>


{/* meet the team */}

</div>
  )
}

export default Categories

export async function getStaticProps(){
  const {categories} = await getCategories();
  return {
    props:{categories}
  }
}