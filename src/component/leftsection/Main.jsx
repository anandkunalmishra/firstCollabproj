import React, {useState} from 'react'
import "./Main.css"
import Repeatbill from './Repeatbill'
import Tip from './Tip'
import Rightsection from '../rightSection/Rightsection'

const Main = () => {

  const [tip, setTip] = useState(0);
   function handleFieldChange(e) {
    setTip(e.target.value);
   }

  const [nop, setNop] = useState(0);
   function handleNopChange(e) {
    setNop(e.target.value);
   }

  return (
    <div className='vertical'>
      <h5 className="text">SPLI<br/>TTER</h5>
      <div className='container'>
        <div className="leftcard">
            <Repeatbill fieldValue={tip} onFieldChange={handleFieldChange} heading="Sanju" sign="$"/>

            <div className="tipsection">
                <p>Select Tip %</p>
                <div className="row">
                  <Tip value={5}/>
                  <Tip value={10}/>
                  <Tip value={15}/>
                  <Tip value={20}/>
                  <Tip value={25}/>
                  <Tip value="Custom" style={{ backgroundColor: 'hsl(186, 14%, 43%)' }} />
                </div>

            </div>
            <Repeatbill fieldValue={nop} onFieldChange={handleNopChange} heading="Anand" sign="$"/> 


        </div>
        <Rightsection tip={tip} nop={nop > 0 ? nop : 1}/>

    </div>
    </div>
  )
}

export default Main
