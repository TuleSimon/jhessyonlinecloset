import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai'
import { BreadCrumb } from '../../components'
import ReactMarkdown from 'react-markdown'
import { getWebsiteDetails } from '../../services'

function index({websiteInformations}) {  

    const routes =  [{"title":"Home", "href":"/","Iconn":AiFillHome},
    { "title":"Privacy Policy", "href":"/privacy-policy","Iconn":AiFillInfoCircle}]

    const myRef = useRef()
    useEffect(() => {
      myRef.current.scrollIntoView({ behavior: 'smooth' })
    }, [])
    

  return (
    <div className="w-full  place-content-center flex flex-col place-items-center">
      <Head>
        <title>PRIVACY POLICY</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Head>
        <meta property="og:title" content="PRIVACY POLICY" key="title" />
      </Head>
        <BreadCrumb routes={routes}/>
        {/* header */}
   
        <div
  className="p-12 w-full text-center relative overflow-hidden bg-no-repeat bg-cover rounded-lg privacy_header" ref={myRef}
>
  <div
    class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed shop_overlay"
  >
    <div class="flex justify-center items-center h-full">
      <div class="text-white">
        <h2 class="font-black text-6xl mb-4">OUR PRIVACY POLICIES</h2>
        <h4 class="font-semibold text-xl mb-6">WASHINGTON INTERIO CROWN LLC</h4>
      </div>
    </div>
  </div>
</div>


<section class="mb-32 text-gray-800">
    <div class="block">
      <div class="flex flex-wrap items-center">
        <div class="grow-0 shrink-0 basis-auto w-full">
          <div class="px-6 py-12 md:px-12">
            <h2 class="text-2xl font-bold mb-4">Read the following carefully</h2>
           
            <p class="text-gray-500 mb-6 leading-tight">
            <ReactMarkdown children={websiteInformations[0]?.privacyPolicy?.markdown} />
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

export default index

export async function getStaticProps(){
  const {websiteInformations} = await getWebsiteDetails;
  return {
    props:{websiteInformations}
  }
}