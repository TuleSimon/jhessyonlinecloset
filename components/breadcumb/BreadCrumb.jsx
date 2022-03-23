import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { HiMenuAlt3 } from 'react-icons/hi'
import { Links, Sidebar } from '..'

function BreadCrumb({routes}) {
    const showDivider = (index) => (
        (index<routes.length-1)
    )

    const [toggle, setToggle] = useState(false)
    const toggleNav = () => (
      setToggle(!toggle)  
      )

  return (
    <nav className="relative w-full flex flex-row  overflow-hidden   items-center
     justify-between py-3 bg-gray-100 text-gray-500 
    hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light">
  <div className="container-fluid w-full  flex flex-row gap-2 px-6">
    <nav className="bg-grey-light rounded-md w-full flex flex-wrap  justify-between" aria-label="breadcrumb">
      <ol className="list-reset flex place-items-center flex-row flex-wrap">
          {routes.map((data,index) => (  
              <>
            <li key={index}> <Links href={data.href} title={data.title} Iconn={data.Iconn}/></li>
               {showDivider(index) && <li><span className="text-gray-500 mx-2">/</span></li>}
               </>
          ))}
      </ol>
    </nav>
    <p className='text-2xl font-bold text-primary cursor-pointer h-fit bg-white rounded-full p-2 hover:bg-primary 
    hover:text-white shadow-xl md:hidden' onClick={toggleNav}>
    {toggle?<AiOutlineClose/>: <HiMenuAlt3/>}
    </p>
    
  </div>
  <Sidebar className={`fixed ${toggle?"left-0":"-left-full"} top-0 z-50 bg-white backdrop-blur-50 w-9/12 transition-all duration-1000 ease-in-out`}/>
</nav>
  )
}

export default BreadCrumb