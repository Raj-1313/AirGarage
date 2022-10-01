import { Box, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function Grey_part({heading,text}) {
  return (
   <Box w="70%" m='auto' p="40px" bg='rgba(0, 0, 0, 0.08)' borderRadius='13px' textAlign='center' mb='10' >
     <Heading>{heading}</Heading>
     <Text mt='4' color='grey'>{text}</Text>
   </Box>
  )
}

export default Grey_part
