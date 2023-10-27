import React from 'react'
import "./Repeatbill.css"

const Repeatbill = ({fieldValue, onFieldChange, heading, sign}) => {
  

  return (
    // <div>
      <div className="repeat">
            <h6>{heading}</h6>
            <input value={fieldValue} onChange={onFieldChange} type="number" className='inputsection' placeholder={sign}/>

        </div>
    // </div>
  )
}

export default Repeatbill
