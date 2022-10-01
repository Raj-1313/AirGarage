import { Box, Container, Spacer,Image, Text, Flex, Button } from '@chakra-ui/react'
import React from 'react'
import Container_compo from './Container_compo'
const Page4 = ({value,heading,text}) => {
 
  return (
    <Box w="70%" m="auto" mt="50px" mb="50px">
       <Text fontSize="35px" fontFamily="Retroica, sans-serif" fontWeight="bold" p="2" >{heading}</Text>
      <Text fontSize="15px" mb="13px">{text}</Text>
   
    <Flex gap={5} >
        {            
        value.map((ele)=><Container_compo title={ele.title} desc={ele.desc} link={ele.link}/>)
        }
 
    </Flex>
 </Box>
  )
}

export default Page4
