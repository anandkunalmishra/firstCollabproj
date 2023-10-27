import React from 'react'
import "./Tip.css"

const Tip = ({value ,style}) => {
  return (
    <div>
      <div className="smallcards" style={style}>
        <p>{value==="Custom" ? value : value+"%"}</p>
      </div>
    </div>
  )
}

export default Tip
