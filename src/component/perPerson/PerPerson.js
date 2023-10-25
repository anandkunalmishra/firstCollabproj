import React from 'react'
import "./PerPerson.css"

function PerPerson({tagline,amount}) {
  return (
    <div className='perperson'>
        <div className='tagline'>
            <h3>{tagline}</h3>
            <h6>/ person</h6>
        </div>
        <span> {amount} </span>
    </div>
  )
}

export default PerPerson