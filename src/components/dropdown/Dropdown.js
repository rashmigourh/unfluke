import React,{useState} from 'react'
import "../dropdown/dropdown.css"
import {BsChevronDown} from "react-icons/bs"

function Dropdown() {
  const [active, setActive]=useState(false);
 
  return (
    <div className='dropdown'>
      <div className="dropdown-btn" onClick={(e)=> setActive(!active)}>
        <p className='drop-p'>Slippage</p>
        <span className='drop-span'>0% <BsChevronDown/></span>
      </div>
      {
        active && (
          <div className="dropdown-content">
               <div className="dropdown-item">
                0%
             </div>
             <div className="dropdown-item">
               0.5%
             </div>
             <div className="dropdown-item">
                1%
             </div>
        </div>
        ) }
    </div>
  );
}

export default Dropdown

