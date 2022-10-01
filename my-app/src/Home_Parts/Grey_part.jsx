import { Box, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function Grey_part({heading,text}) {
  return (
   <Box w={{base:"90%",sm:'80%',md:"70%", lg:'70%'}} m='auto' p="30px" bg='rgba(0, 0, 0, 0.08)' borderRadius='13px' textAlign='center' mb='10' >
     <Heading fontSize={{base:"15px",sm:'20px',md:"25px", lg:'30px'}}>{heading}</Heading>
     <Text fontSize='12px' mt='4' color='grey'>{text}</Text>
   </Box>
  )
}

export default Grey_part
