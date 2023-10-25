import React from 'react'
import "./Rightsection.css"
import PerPerson from '../perPerson/PerPerson'

function Rightsection() {
  return (
    <div className='rightsection'>
        <div className='tipvalue'>
            <PerPerson tagline={"Tip Amount"} amount={"$0.00"} />
            <PerPerson tagline={"Tip Amount"} amount={"$0.00"} />
        </div>

        <div className='btnWrap'>
            <button className='resetBtn'> RESET </button>
        </div>

    </div>
  )
}

export default Rightsection