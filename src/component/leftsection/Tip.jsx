import React from 'react'
import "./Tip.css"

const Tip = ({value}) => {
  return (
    <div>
      <div className="smallcards">
        <p>{value}</p>
      </div>
    </div>
  )
}

export default Tip
