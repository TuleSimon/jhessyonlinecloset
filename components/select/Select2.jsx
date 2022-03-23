import React from 'react'

function Select2({options, styles, setState}) {

  const changeState = (value) => {
      setState(value)
  }

  return (
    
        <div className={`flex justify-center w-full md:w-fit ${styles && "col-span-2 w-full grow"}`}>
  <div  className="mb-3 w-full">
    <select onChange={e=> changeState(e.target.value)}  className="form-select appearance-none
      block
      w-full
      md:px-6
      px-8
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-primary
      rounded
      transition
      hover:border-primary
      drop-shadow-xl
      hover:outline-none
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none" aria-label="Default select example">
        <option selected>Categories</option>
        <option value={null}
             onClick={e=> changeState(null)} className="truncate text-sm">All</option>
        {options?.map((option) => (
            <option value={option.slug}
             onClick={e=> changeState(option.slug)} className="truncate text-sm">{option.name.toUpperCase()}</option>
        ))}
    </select>
  </div>
</div>

  )
}

export default Select2