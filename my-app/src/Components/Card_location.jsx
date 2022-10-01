import React from 'react'
import {Box,Badge ,Image,Text,Link, Flex, Grid} from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons'

const Card_location = ({functionClick,props}) => {
const {  url, name,  address, address1, address2, address3, address4,  price }=props



  return (
    <>
   
      <Box p={4} onClick={functionClick} display={{ md: 'flex' }} >
  <Box flexShrink={0}>
    <Image
      borderRadius='lg'
      width={{ md: 40, lg:'60' }}
      src= {url}
      alt='Woman paying for a purchase' 
      h={{ md: '130', lg:'130' }}
      />
  </Box>
  <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
    <Flex gap={2}>

    <Badge colorScheme='green' fontWeight='bold'  fontSize='sm' letterSpacing='wide' color='teal.600' >
      GOOD PRICE
    </Badge>
    <Badge  bg='yellow.300'  fontWeight='bold'   fontSize='sm'  color='teal.600' >
    <StarIcon/> 4.5 
    </Badge>
    </Flex>
    <Link
      mt={1}
      display='block'
      fontSize='lg'
      lineHeight='normal'
      fontWeight='semibold'
      href='#'
    >
      {name}
    </Link>
    <Text mt={2} color='gray.500'> {address}  {address1} {address2} {address3} {address4} </Text>
    <Text mt={2} color='gray.500'> {price} </Text>
  </Box>
</Box>
    </>
  )
}

export default Card_location
