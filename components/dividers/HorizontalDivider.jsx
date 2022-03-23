import React from 'react'

function HorizontalDivider(props) {
    return ( <
        hr className = { `bg-primary w-12 h-2 rounded-xl drop-shadow-xl shadow-pink-600 shadow-xl ${props.style}` }
        />
    )
}

export default HorizontalDivider