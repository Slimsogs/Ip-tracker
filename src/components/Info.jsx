import React from 'react'
import './Nav.css'

const Info = ({address}) => {
  return (
    <div className="main-con">
      
        <div className='ip-info'>
            <div className="info address">
                <p>IP ADDRESS</p>
                <h5>{address.ip}</h5>
            </div>
            <div className="info location">
                <p>LOCATION</p>
                <h5>{address.location.city}, {address.location.region} <br /> {address.location.postalCode}</h5>
            </div>  
            <div className=" info time-zone">
                <p>TIMEZONE</p>
                <h5>UTC {address.location.timezone}</h5>
            </div>
            <div className="info isp">
                <p>ISP</p>
                <h5>{address.isp}</h5>
            </div>
        </div>
    </div>
  )
}

export default Info