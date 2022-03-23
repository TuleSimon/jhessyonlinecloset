import Link from 'next/link'
import React from 'react'
import BigButtonFill from '../buttons/BigButtonFill'

function CategoriesCard({category}) {

 const {id,  image,  name,  slug, description} = category
  return (
        <div className="flex justify-center h-full cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="light">
    <Link href={`/categories/${slug}`} className="cursor-pointer" >
    <div className="rounded-lg shadow-lg hover:shadow-2xl hover:translate-y-1 transition-all ease-in bg-white max-w-sm">
      <img className="rounded-t-lg h-56 w-full" src={image.url} alt={name}/>
 
    <div className="p-6 flex flex-col place-content-between h-12/12">
      <>
      <h5 className="text-gray-900 text-xl font-bold mb-2">{name.toUpperCase()}</h5>
      <p className="text-gray-700 text-sm text-base mb-4 line-clamp-5">
        { description}
      </p>
      </>
      <BigButtonFill>Explore</BigButtonFill>
    </div>
    </div>
    </Link>
</div>
    
  )
}

export default CategoriesCard