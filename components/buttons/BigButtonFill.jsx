import React from 'react'

function BigButtonFill(props) {
 
  return    <button disabled={props.disabled} onClick={props.onClick} className={`text-sm md:text-md bg-gray-600 h-fit text-white font-bold
     hover:bg-secondary transition-all  flex gap-2 place-items-center place-content-center
    duration-1000 rounded p-2 mt-2 hover:translate-y-2 drop-shadow-2xl disabled:bg-gray-500 disabled:cursor-not-allowed
    hover:bg-primary ${props.styles && props.styles}
    `}>{props.children}</button>
}


export default BigButtonFill