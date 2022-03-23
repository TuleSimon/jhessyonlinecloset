import { Rating } from '@mui/material'
import Head from 'next/head'
import React, { useEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { AiFillHome } from 'react-icons/ai'
import { FaPhoneAlt, FaLightbulb, FaMoneyBill, FaWhatsapp } from 'react-icons/fa'
import { HiShoppingCart } from 'react-icons/hi'
import { BigButton, BreadCrumb, HorizontalDivider } from '../../../components'
import BigButtonFill from '../../../components/buttons/BigButtonFill'
import { getFloor, getFloors, getWebsiteDetails } from '../../../services'

function Products({floor}) {
 

    const myRef = useRef()
    useEffect(() => {
      myRef.current.scrollIntoView({ behavior: 'smooth' })
    
    }, [])
    

    const {productDescription,categories, name,price,rating,slug, images} = floor;
    const routes =  [{"title":"Home", "href":"/","Iconn":AiFillHome},
    { "title":"Products", "href":"/shop/products","Iconn":HiShoppingCart},
    { "title":slug, "href":`/shop/products/${slug}`,"Iconn":HiShoppingCart}]

    const [imgurl, setImgurl] = useState("")
    const [websiteInformation, setWebInfo] = useState({})

    const get = async function(){
  const {websiteInformations} = await getWebsiteDetails;
  setWebInfo(websiteInformations[0])
}
    useEffect(() => {
      setImgurl(images[0].url)
      get()
    }, [])
    

    

  return (
    <div className="w-full  place-content-center flex flex-col place-items-center">
      <Head>
        <title>{name?name:"Loading"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Head>
        <meta property="og:title" content={name?name:"Loading"} key="title" />
      </Head>
        <BreadCrumb routes={routes}/>

    <div className="flex md:flex-row flex-col py-2 gap-2" ref={myRef}>
      
        {/* <Zoom img={images[0].url} zoomScale={2}  height={300} width={200}  transitionTime={1}/> */}
        <img src={imgurl}
        className='rounded md:basis-1/2  w-full overflow-hidden cursor-zoom-in'/>
      
        <div className="flex flex-col w-full  md:basis-1/2 p-2">
            
        <h1 className="text-lg text-gray-600 text-left font-black">{name} </h1>
        <p className="text-xl font-black my-2"> ₦{price} </p>
        <Rating name="read-only" value={rating} readOnly size="small" />
        <HorizontalDivider style="mb-8"/>
        <p className="text-sm font-black my-2 text-gray-500 text-left"> 
        Delivery within Nigeria </p>
        <p className="text-md text-left mb-2"> 
        <ReactMarkdown children={productDescription?.markdown} /></p>
        <div className='flex flex-row gap-6'> 
            <p className="flex flex-row place-items-center gap-2 text-primary"> <FaMoneyBill/> 
            {Math.floor(4 + (Math.random() * (300 - 4)))} Sales</p>
            <p className="flex flex-row place-items-center gap-2 text-green-400"> <FaLightbulb/> In Stock</p>
        </div>
        <p className="flex flex-row place-items-center gap-2 text-primary my-2 text-textcolor" > 
        <span className="font-bold text-lg ">Category: </span>{categories[0].name}
        </p>
        <div className='flex flex-col gap-2'> 
        <a className="w-full grow flex" href={`https://wa.me/${websiteInformation?.phoneNumber}?text=I would like to place an order for ${name}`}>
            <BigButton styles="w-full"> <FaWhatsapp/> ORDER NOW </BigButton></a>
            <a className="w-full grow flex" href={`tel:+${websiteInformation?.phoneNumber}`}>
            <BigButtonFill styles="bg-blue-600 border-2 border-blue-600 hover:bg-blue-800 w-full"> <FaPhoneAlt/> Call Seller </BigButtonFill></a>
        </div>


       
        <p className="text-lg mt-8 font-bold text-black text-left"> 
       More Images. </p>
       <HorizontalDivider style="mb-2"/>

       <div className='grid grid-cols-4 grid-rows-1 w-full gap-2'> 
       {images.map((image) => (
           <div className="relative" key={image.url}   onClick={e=> setImgurl(image.url)}>
            <img src={image.url} 
            className="w-32 shadow-lg rounded hover:scale-105 transition-all ease-in-out 
            transition-1000 hover:shadow-2xl" />
            {image.url == imgurl &&
            <div className='bg-primary absolute bottom-1 right-1 rounded-full w-4 h-4'> </div>}
            </div>
       ))}
        </div>

        </div>
    </div>

    </div>
  )
}

export default Products

export async function getStaticProps({ params }) {
    
    const {products} = await getFloor(params.slug);
  
    if(products[0]==undefined || products[0]==null){
        return {
            notFound:true,
        }
    }
    return {
      props: {
        floor: products[0],
      },
    };
  }
  
  export async function getStaticPaths() {
    const floors = await getFloors;
    return {
      paths: floors?.productsConnection?.edges?.map(({ node: { slug } }) => ({ params: { slug } })),
      fallback: true,
    };
  }