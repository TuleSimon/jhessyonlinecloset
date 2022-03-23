import { Router } from 'next/router'
import React, { useState } from 'react'

function Search({setSearch, search}) {
    
  const [value, setValue]=useState("")
    const doSearch = (e) => {
      e.preventDefault()     
       setSearch(value)
    }

  return (
    <div className="flex justify-center grow mr-2">
      <div className="w-full">
        <div >
          <form className="input-group relative flex flex-wrap items-stretch w-full" onSubmit={e=> doSearch(e)}>
        <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 
        text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-primary
         rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-2 focus:outline-none focus:outline-primary" 
         placeholder="Search" aria-label="Search" aria-describedby="button-addon3"
         value={value} onChange={e=> setValue(e.target.value)}
         />
        <button className="btn inline-block px-6 py-2 bg-primary bg_pr text-white font-medium text-xs leading-tight 
        uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition 
        duration-150 ease-in-out z-10" 
        type="submit" >Search</button>
        </form>
        </div>
    </div>
    </div>
  )
}

export default Search