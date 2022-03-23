import React, { useRef } from 'react'
import { useEffect } from 'react'
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai'
import { BreadCrumb } from '../../components'
import ReactMarkdown from 'react-markdown'
import { getWebsiteDetails } from '../../services'
import Head from 'next/head'

function About({websiteInformations}) {  
  const myRef = useRef()
  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: 'smooth' })
  
  }, [])
  
    const routes =  [{"title":"Home", "href":"/","Iconn":AiFillHome},
    { "title":"About", "href":"/about","Iconn":AiFillInfoCircle}]



  return (
    <div className="w-full  place-content-center flex flex-col place-items-center">
      <Head>
        <title>ABOUT US</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Head>
        <meta property="og:title" content="ABOUT US" key="title" />
      </Head>
        <BreadCrumb routes={routes}/>
        {/* header */}
   
        <div
  className="p-12 w-full text-center relative overflow-hidden bg-no-repeat bg-cover rounded-lg aboutus_header" ref={myRef}
>
  <div
     className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed shop_overlay"
  >
    <div  className="flex justify-center items-center h-full">
      <div  className="text-white">
        <h2  className="font-black text-6xl mb-4">ABOUT US</h2>
        <h4  className="font-semibold text-xl mb-6">WASHINGTON INTERIO CROWN LLC</h4>
      </div>
    </div>
  </div>
</div>


<section  className="mb-32 text-gray-800">
    <div  className="block">
      <div  className="flex flex-wrap items-center">
        <div  className="grow-0 shrink-0 basis-auto w-full">
          <div  className="px-6 py-12 md:px-12">
 
          <p  className="text-gray-500 mb-6">
        <ReactMarkdown> {websiteInformations[0]?.aboutUs?.markdown} </ReactMarkdown>
        </p>
          </div>
        </div>
      </div>
    </div>
  </section>


{/* meet the team */}

</div>
  )
}

export default About

export async function getStaticProps(){
  const {websiteInformations} = await getWebsiteDetails;
  return {
    props:{websiteInformations}
  }
}