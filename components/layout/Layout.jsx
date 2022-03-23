import Script from 'next/script'
import React from 'react'
import { Footer, Sidebar } from '..'

function Layout({children}) {

  return (
    <div className="flex flex-col w-screen min-h-screen overflow-hidden relative">
         <Script src="https://cdn.tailwindcss.com"></Script>
         <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
        <div className="flex flex-row w-full h-full overflow-hidden h-screen"> 
            <Sidebar className="lg:basis-1/4 md:basis-1/3 md:flex hidden w-full"/>
            <div className="grow w-full h-full overflow-y-scroll ">
            {children}

            <Footer/>
            </div>
        </div>
    </div>
  )
}

export default Layout