import React, { useEffect, useRef } from 'react'
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai'
import Head from 'next/head'
import { BreadCrumb} from '../../components'
import ReactMarkdown from 'react-markdown'
import { getWebsiteDetails } from '../../services'

function index({websiteInformations}) {  

    const routes =  [{"title":"Home", "href":"/","Iconn":AiFillHome},
    { "title":"Terms and Condition", "href":"/terms-condition","Iconn":AiFillInfoCircle}]

    const myRef = useRef()
    useEffect(() => {
      myRef.current.scrollIntoView({ behavior: 'smooth' })
    
    }, [])
    

  return (
    <div className="w-full  place-content-center flex flex-col place-items-center">
      <Head>
        <title>TERMS AND CONDITIONS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Head>
        <meta property="og:title" content="TERMS AND CONDITIONS" key="title" />
      </Head>
        <BreadCrumb routes={routes}/>
        {/* header */}
   
        <div
  className="p-12 w-full text-center relative overflow-hidden bg-no-repeat bg-cover rounded-lg terms-condition_header" ref={myRef}
>
  <div
     className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed terms-condition_header"
  >
    <div  className="flex justify-center items-center h-full">
      <div  className="text-white">
        <h2  className="font-black text-6xl mb-4">TERMS AND CONDITIONS</h2>
        <h4  className="font-semibold text-xl mb-6">Things you need to know</h4>
      </div>
    </div>
  </div>
</div>


<section  className="mb-32 text-gray-800">
    <div  className="block">
      <div  className="flex flex-wrap items-center">
        <div  className="grow-0 shrink-0 basis-auto w-full">
          <div  className="px-6 py-12 md:px-12">
            <h2  className="text-2xl font-bold mb-4">OUR TERMS AND CONDITIONS</h2>
        
            <p  className="text-gray-500 mb-6 leading-tight">
            <ReactMarkdown children={websiteInformations[0]?.termsAndConditions?.markdown} />
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