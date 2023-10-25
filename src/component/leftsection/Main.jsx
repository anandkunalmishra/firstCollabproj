import React from 'react'
import "./Main.css"
import Repeatbill from './Repeatbill'
import Tip from './Tip'
import Rightsection from '../rightSection/Rightsection'

const Main = () => {
  return (
    <div className='vertical'>
      <div className='text'>
      <h5>SPLI</h5>
      <h5>TTER</h5>
      </div>
      <div className='container'>
        <div className="leftcard">
            <Repeatbill heading={"Bill"}/>
            <div className="tipsection">
                <p>Select Tip %</p>
                <div className="row">
                  <Tip value="5%" style={{ backgroundColor: 'hsl(183, 100%, 15%)' }} />
                  <Tip value="10%" style={{ backgroundColor: 'hsl(183, 100%, 15%)' }} />
                  <Tip value="15%" style={{ backgroundColor: 'hsl(183, 100%, 15%)' }} />
                  <Tip value="25%" style={{ backgroundColor: 'hsl(183, 100%, 15%)' }} />
                  <Tip value="50%" style={{ backgroundColor: 'hsl(183, 100%, 15%)' }} />
                  <Tip value="Custom" style={{ backgroundColor: 'hsl(186, 14%, 43%)' }} />
                </div>

            </div>
            <Repeatbill heading={"Number of People"}/>

        </div>
        <Rightsection/>

    </div>
    </div>
  )
}

export default Main
