import React from 'react'
import "./Repeatbill.css"

const Repeatbill = ({heading,sign}) => {
  return (
    <div>
      <div className="repeat">
            <h6>{heading}</h6>
            <input type="number" className='inputsection' placeholder={sign} />

        </div>
    </div>
  )
}

export default Repeatbill
