import React from 'react'
import "./Main.css"
import Repeatbill from './Repeatbill'
import Tip from './Tip'
import Rightsection from '../rightSection/Rightsection'

const Main = () => {
  function CalculateTip(){
    let tip=0;
    
  }
  return (
    <div className='vertical'>
      <div className='text'>
      <h5>SPLI</h5>
      <h5>TTER</h5>
      </div>
      <div className='container'>
        <div className="leftcard">
            <Repeatbill heading={"Bill"} sign="$"/>
            <div className="tipsection">
                <p>Select Tip %</p>
                <div className="row">
                  <Tip value={5} />
                  <Tip value={10}/>
                  <Tip value={15}/>
                  <Tip value={20}/>
                  <Tip value={25}/>
                  <Tip value="Custom" style={{ backgroundColor: 'hsl(186, 14%, 43%)' }} />
                </div>

            </div>
            <Repeatbill heading={"Number of People"} sign="@"/>

        </div>
        <Rightsection/>

    </div>
    </div>
  )
}

export default Main
