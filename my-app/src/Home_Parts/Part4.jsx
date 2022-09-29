import { Box, Container, Spacer,Image, Text, Flex, Button } from '@chakra-ui/react'
import React from 'react'
import Container_compo from './Container_compo'
const Page4 = () => {
    const arr=[{title:"Best-in-class Economics",link:"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a1f28039ee32a88bdfae6_cover.png",desc:"Increase Net Operating Income at your property by up to 50% vs other parking operators."},
    {title:"You're in Control",link:"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a1f2937a53c7a2bfb65b7_slider.png",desc:"Need to reserve spaces for customers or validate employee vehicles? Our system was built with multi-use cases in mind."},
        {title:"Always On Enforcement",link:"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a1f2957e7c929611df3bb_secure.png",desc:"AirGarage's proprietary network of enforcement officers scans day and night so you don't have to stress about violators."}
    ]
  return (
    <Box w="70%" m="auto" mt="50px" mb="50px">
      <Text fontSize="35px" fontFamily="Retroica, sans-serif" fontWeight="bold" p="2" >Our value proposition</Text>
      <Text fontSize="15px" mb="13px">We've built the operating system for parking management, infusing technology into every facet of the business.</Text>
   
    <Flex gap={5} >
        {            
        arr.map((ele)=><Container_compo title={ele.title} desc={ele.desc} link={ele.link}/>)
        }
 
    </Flex>

    </Box>
  )
}

export default Page4
