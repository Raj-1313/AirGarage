import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import {AuthContext} from "../Context/AuthContect"
import { Navigate } from "react-router-dom";
import { Box, Button, Container, Flex, FormControl, FormLabel, Grid, Heading, Image, Img, Input,Text,useToast } from "@chakra-ui/react";


 
const Login = () => {
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")
const {state,dispatch} = useContext(AuthContext)
 const toast=useToast()

const getData = (email,password) => {
 return axios.post(`https://reqres.in/api/login`,{
email,password
  })
}

const handleClick=(e)=>{
e.preventDefault()
  getData(email,password).then((res) => dispatch({type:"authDone"} , ))
   .catch((err) => toast({
    description: `Fill the details correctly `
   }) )
}

if(state.isAuthenticated){
  toast({
    title: 'Account created.',
    description: `Your account created SUCCESSFULLY `,
    status: 'success',
    duration: 3000,
    isClosable: true,
  })
  return <Navigate to="/" />
}

return (
  
  <Flex>
    <Box alignItems='center'  h="100vh" w="400px" bg="#fec!important">
      <Image src="https://dashboard.airgarage.com/static/media/AirGarage.919cc784.png" alt="LOGO" width="80px" />
      <Image src="https://dashboard.airgarage.com/static/media/money_machine.b5d474b0.png" alt="uniCon" width="40vh"  margin='auto' mt='50%'  />
    </Box>

  <Container  textAlign='center' alignItems='center' mt="10%" h="100vh" w="400px"  >
  <FormControl isRequired boxShadow='rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px' border='1px solid orange' borderBottom='none' borderRight='none' borderRadius='10' p='10'>
<Heading fontSize='20'fontFamily='Times New Roman, Times, serif' >Log in to AirGarage</Heading>
<Text>Or Signup</Text>
  <FormLabel>Email</FormLabel>
  <Input placeholder='Email' value={email} type="email" onChange={(e)=>setEmail(e.target.value)} />
  <FormLabel>Password</FormLabel>
  <Input placeholder='Password' value={password} type="password" onChange={(e)=>setPassword(e.target.value)} />
  <Button w='full' mt='10' onClick={handleClick}>Submit</Button>
</FormControl>
  </Container>
  
  </Flex>
  
)

}

export default Login;
