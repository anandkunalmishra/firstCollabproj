import React from 'react'
import "./Repeatbill.css"

const Repeatbill = ({heading}) => {
  return (
    <div>
      <div className="repeat">
            <h6>{heading}</h6>
            <input type="text" className='inputsection' placeholder='$' />

        </div>
    </div>
  )
}

export default Repeatbill
