import { Box, Container, Spacer,Image, Text, Flex, Button, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import Container_compo from './Container_compo'
const Page4 = ({value,heading,text}) => {
 
  return (
    <Box w="70vw" p='10' m="auto" mt="50px" mb="50px" boxShadow='rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' >
       <Text fontSize={{base:"17px",sm:'25px',md:"35px",lg:'35px'}} fontFamily="Retroica, sans-serif" fontWeight="bold" p="2" >{heading}</Text>
      <Text fontSize={{base:"10px",sm:'12px',md:"13px",lg:'15px'}} mb="13px">{text}</Text>
   
    <Grid templateColumns={{base:'repeat(1,1fr)',sm:'repeat(2,1fr)',md:'repeat(3,1fr)',lg:'repeat(3,1fr)'}} >
        {            
        value.map((ele)=><GridItem><Container_compo  title={ele.title} desc={ele.desc} link={ele.link}/></GridItem>)
        }
 
    </Grid>
 </Box>
  )
}

export default Page4
