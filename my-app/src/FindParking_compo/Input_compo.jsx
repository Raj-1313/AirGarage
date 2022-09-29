import {Text, Button, Container, Flex, FormControl, FormLabel, Input, Select, MenuItem, VStack, MenuList, Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'
import { FaHandLizard } from 'react-icons/fa'
const Input_compo = () => {
const [name,setName]=useState()
const [modeType,settype]=useState("")
const [location,setLocation]=useState({
    lat:"",lon:""
})

const getData=(lon,lat,time)=>{
axios.get(`https://api.airgarage.com/api/spots/?lite=true&lat=${lat}&lon=${lon}&rentalDuration=${time}`)
.then((res)=>console.log(res.data)).catch((err)=>console.log(err));
}

const GetData=(country)=>{
axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${country}&limit=10&appid=dcb77b0098b3350f151fac655e8d374a`)
.then((res)=> setLocation({lat:res.data[0].lat,lon:res.data[0].lon})).catch((err)=>console.log(err))
}
// setLocation({lat:34.0522342,lon:-118.2436849}
const HandleChange= (e) => {
    // GetData(e.target.value);    
}

const onSubmit=(e)=>{
    const {lat,lon}=location
    console.log(modeType);
    console.log(lat,lon);
  getData(lon,lat,modeType)
}
console.log(name);
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
    {/* <Box  border="1px solid red" w="30vw">
             {
name && name.map((item)=> {
    return <p>{item.name}</p>
} )
             }
    </Box> */}
  </VStack>
</Container>
<Container>
<FormControl>
  <FormLabel>TYPE</FormLabel>
  <Select onChange={(e)=>settype(e.target.value)}>
    <option>monthly</option>
    <option>hourly</option>
    <option>airport</option>
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
