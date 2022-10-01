import {Text, Button, Container, Flex, FormControl, FormLabel, Input, Select,  VStack,  } from '@chakra-ui/react'
import React, { useState,useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../Context/AuthContect'
import { Navigate } from 'react-router-dom'

const Input_compo = () => {
const {state,dispatch} =useContext(AuthContext)
const [modeType,settype]=useState("")
const [navigate,setNavigate]=useState(false)
const [location,setLocation]=useState({
  lat:"",lon:""
})
const [locationName,setLocationName]=useState("")

const getData=(lon,lat,time)=>{
 
axios.get(`https://api.airgarage.com/api/spots/?lite=true&lat=${lat}&lon=${lon}&rentalDuration=${time}`)
.then((res)=>dispatch({type:"DATA",payload:res.data}), setNavigate(true), dispatch({type:"NOLOADING"}) ).catch((err)=>console.log(err));
}


const GetData=(country)=>{
axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${country}&limit=10&appid=dcb77b0098b3350f151fac655e8d374a`)
.then((res)=> setLocation({lat:res.data[0].lat,lon:res.data[0].lon})).catch((err)=>setLocation({lat:34.0522342,lon:-118.2436849}))
}

const HandleChange= (e) => {
    GetData(e.target.value);    
    setLocationName(e.target.value);
}

const onSubmit=(e)=>{
    const {lat,lon}=location
      getData(lon,lat,modeType)
  dispatch({type: 'LOADING'})
}

if(state.isLoading){
return <Navigate to="/loading" />
}
if(navigate){
  return <Navigate to="/locationData"></Navigate>
}



  return (
    <>
      <Container textAlign="center" >
        <Text fontSize="4xl" as="b" >Find Parking</Text>
        <Text >100s of spots available near you</Text>
      </Container>
      <FormControl>
        <Flex>

<Container>
  <FormLabel>LOCATION</FormLabel>
  <VStack>
 <Input type="name" placeholder="Enter an address" w="30vw" onChange={HandleChange}/>
  
  </VStack>
</Container>
<Container>
<FormControl>
  <FormLabel>TYPE</FormLabel>
  <Select defaultValue="monthly" onChange={(e)=>settype(e.target.value)}>
    <option value="monthly" >Monthly</option>
    <option value="hourly">Hourly</option>
    <option value="airport">Airport</option>
  </Select>
</FormControl>
</Container>
<Button p="6" onClick={onSubmit}>SEARCH</Button>

        </Flex>
      </FormControl>
    </>
  )
}

export default Input_compo
