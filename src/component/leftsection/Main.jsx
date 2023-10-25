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
            <Repeatbill heading={"bill"}/>
            <div className="tipsection">
                <p>Select Tip %</p>
                <div className="row">
                    <Tip value={"5%"}/>
                    <Tip value={"10%"}/>
                    <Tip value={"15%"}/>
                    <Tip value={"25%"}/>
                    <Tip value={"50%"}/>
                    <Tip value={"Custom"}/>
                </div>
            </div>
            <Repeatbill heading={"Number of people"}/>

        </div>
        <Rightsection/>

    </div>
    </div>
  )
}

export default Main
