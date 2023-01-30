import React from "react"
import { MapContainer, TileLayer, useMap,Marker,Popup,} from 'react-leaflet'
// import 'leaflet/dist/leaflet.css'
import locations from '../images/locations.svg'
import {Icon} from 'leaflet'
import { useState } from "react"

const Map = ({lngnum,latnum,searchTerm}) => {
 

//  console.log(lng)
  const position = [51.05, -0.09]
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true} 
      style={{height:'78vh',width:'100vw', position:'fixed', zIndex:'-1'}}  dragging={true}
      >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position} icon={new Icon({iconUrl: locations, iconSize: [30, 38], iconAnchor: [12, 41]})}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  )
}

export default Map