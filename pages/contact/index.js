import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import { AiFillContacts, AiFillHome } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import { BreadCrumb } from '../../components'
import { getWebsiteDetails } from '../../services'

function index({websiteInformations}) {

    const routes =  [{"title":"Home", "href":"/","Iconn":AiFillHome},
    { "title":"Contact Us", "href":"/contact","Iconn":AiFillContacts}]
    const myRef = useRef()
    useEffect(() => {
      myRef.current.scrollIntoView({ behavior: 'smooth' })
    
    }, [])
    

  return (    
      <div className="w-full">
        <Head>
        <title>CONTACT US</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Head>
        <meta property="og:title" content="CONTACT US" key="title" />
      </Head>
          <BreadCrumb routes={routes}/>
<div class="container my-24 px-6 mx-auto" ref={myRef}>

  <section class="mb-32 text-gray-800">
    <div class="flex flex-wrap">
      <div class="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
        <h2 class="text-3xl font-bold mb-6">Contact us</h2>
        <p class="text-gray-500 mb-6">
        <ReactMarkdown children={websiteInformations[0]?.contactUs?.markdown} />
        </p>
        <p class="text-gray-500 mb-4">{websiteInformations[0]?.businessAddress}</p>
        <p class="text-gray-500 mb-4">{websiteInformations[0]?.phoneNumber?.map((no) => (
            <span key={no}>{no}</span>
          ))}</p>
        <p class="text-gray-500 mb-2">{websiteInformations[0]?.businessEmail}</p>
      </div>
      <div class="grow-0 shrink-0 basis-auto mb-12 md:mb-0 gap-2 flex md:grid grid-col-2 flex-col w-full md:w-6/12 px-3 lg:px-6">
      <h2 class="text-3xl font-bold mb-2 md:col-span-2 h-fit">Our Handles</h2>
      <p class="text-gray-500 mb-2 md:col-span-2">
          Connect with us on all our social media handles, we are online 24/7 and ready to listen to your messages.
        </p>

        
        <a href={`https://wa.me/234${websiteInformations[0]?.whatsappNumber}`} 
        className="flex border border-blue-400 rounded h-fit p-2 gap-2 place-items-center cursor-pointer hover:bg-green-400 hover:text-white transition-all duration-1000 ease-in-out">
              <FaWhatsapp className="cursor-pointer hover:text-secondary"/>
              Whatsapp
            </a>
           
            
            <a href={`https://facebook.com/${websiteInformations[0]?.facebookhandle}`} 
            className="flex border border-blue-500 rounded h-fit p-2 gap-2 place-items-center cursor-pointer hover:bg-blue-500
             hover:text-white transition-all duration-1000 ease-in-out">
            <FaFacebook  className="cursor-pointer hover:text-secondary"/>Facebook </a>
           
            
            <a href={`https://instagram.com/${websiteInformations[0]?.instagramHandle}`} className="flex border border-orange-400 
            rounded h-fit p-2 gap-2 place-items-center cursor-pointer hover:bg-red-400 hover:text-white transition-all duration-1000 ease-in-out">
            <FaInstagram className="cursor-pointer hover:text-secondary"/> Instagram
            </a>
           
            
            <a href={`https://twitter.com/${websiteInformations[0]?.twitterHandle}`} className="flex border border-blue-300 rounded 
            h-fit p-2 gap-2 place-items-center cursor-pointer hover:bg-blue-300 hover:text-white transition-all duration-1000 ease-in-out">
            <FaTwitter className="cursor-pointer hover:text-secondary"/> Twitter
            </a>
      </div>
    </div>
  </section>
</div>
</div>

  )
}

export default index

export async function getStaticProps(){
  const {websiteInformations} = await getWebsiteDetails;
  return {
    props:{websiteInformations}
  }
}