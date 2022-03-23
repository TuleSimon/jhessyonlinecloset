import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'

import { VerticalLine } from '..';

function Links({href,title,Iconn}) {

  const router = useRouter()
  const active = router.pathname === href
 
  

  return (
    <Link href={href} scroll={true}>
        <span  className={`hover:bg-primary group font-bold hover:text-white transition-all ease-in-out duration-1000 
        flex place-items-center gap-6 truncate
        text-sm  w-full cursor-pointer p-2 hover:gap-10 ${active ? 'bg-primary gap-10 text-white' : 'text-textcolor'}`}>
             <span className="flex gap-2 place-items-center place-content-center"><Iconn/> 
             <VerticalLine active={active}/></span>  {title}  </span>
    </Link>
  )
}

export default Links