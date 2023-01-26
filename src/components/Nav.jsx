import React from 'react'
import './Nav.css'
import arrow from '../images/arrow.svg'
import Info from './Info'


const Nav = ({text,handlechange,handleSubmit,lat}) => {


  return (
    <div className='main'>
      <div className="nav-title">
        <h3>IP Address Tracker</h3>
      </div>
      <div className="search">
       <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handlechange}/>
        <button type='submit' id='arrow'>
           <img src={arrow} alt="" id='arrow-pic' />
        </button>
        <div>{lat}</div>
       </form>
      </div>
      {/* <div className='ip-info'>
          <div className="info address">
            <p>IP ADDRESS</p>
            <h5>192.212.174.101</h5>
          </div>
          <div className="info location">
            <p>LOCATION</p>
            <h5></h5>
          </div>  
          <div className=" info time-zone">
            <p>TIMEZONE</p>
            <h5></h5>
          </div>
          <div className="info isp">
            <p>ISP</p>
            <h5></h5>
          </div>
      </div> */}
    </div>
  )
}

export default Nav
