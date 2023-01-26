import Nav from './components/Nav';
import Map from './components/Map';
import './App.css';
import React from 'react'
import Info from './components/Info';
import { useEffect } from 'react'
import Ipify from './apis/Ipify'
import { useState } from 'react'

function App() {

  const [address, setAddress] =useState('')
  const [text, SetText] = useState('')
  const [searchTerm, setSearchTerm] =useState('')
  const [latnum, setLatNum] = useState('')
  const [lngnum, setLngNum] = useState('')

  const destructure = ()=>{
    let {ip,location} = address
    console.log(location)
    setLatNum(Number(location.lat))
    setLngNum(Number(location.lng))
    
  }


  

  const handlechange= (e) =>{
    SetText(e.target.value)
  }

  const handleSubmit =(e) =>{
    e.preventDefault()
    setSearchTerm(text)
    // fetchSearchApi()
    // destructure()
    
  }

 
 

  // const fetchApi = async() =>{
  //   try{
  //    const {data}= await Ipify.get("/country,city?&ipAddress=8.8.8.8")
   

  //     setAddress(data)
  //     }catch(err){
  //       console.log(err.res)
  //     }
  // }
  const fetchSearchApi = async() =>{
    try{
     const {data}= await Ipify.get("/country,city",{
      params: {
        ipAddress: searchTerm
      }
     })
      
      setAddress(data)
     
      }catch(err){
        console.log(err.res)
      }
  }

  // useEffect(() =>{
      
  //     fetchApi()
  // },[])
  useEffect(() =>{
      
    fetchSearchApi()
},[searchTerm])



  return (
    <div className="App">
      <Nav text={text} handlechange={handlechange}
       handleSubmit={handleSubmit} address={address}
       
       />
      {searchTerm && <Info address={address}/>}

      <Map latnum={latnum} lngnum={lngnum} searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
