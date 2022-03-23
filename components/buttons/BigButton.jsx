import React from 'react'

function BigButton(props) {
  return (
    <button disabled={props.disabled} onClick={props.onClick} className={`text-sm md:text-md border-2 border-primary
     h-fit text-primary font-bold truncate
     hover:bg-primary hover:text-white transition-all  flex gap-2 place-items-center place-content-center
    duration-1000 rounded p-2 mt-2 hover:translate-y-1 drop-shadow-2xl disabled:bg-gray-500 disabled:cursor-not-allowed
    hover:bg-primary ${props.styles && props.styles}
    `}>{props.children}</button>
  )
}

export default BigButton