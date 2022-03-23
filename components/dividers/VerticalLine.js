import React from 'react'

function VerticalLine({active}) {
  return (
    <div className={`${active?"bg-white":""} group-hover:bg-white h-4  w-1 rounded`}> </div>
  )
}

export default VerticalLine