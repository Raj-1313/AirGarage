import { Box, Button, ButtonGroup, Text } from '@chakra-ui/react'
import React from 'react'

const Part1 = () => {
  return (
    <Box>
    <Text fontSize="35px" fontFamily="Retroica, sans-serif" textAlign="center" p="2" fontWeight="Bold">
      Parking Operations for the 21st Century
    </Text>
    <Box  w="75%" fontSize="20px" m="auto" textAlign="center" mb="30px">
      AirGarage modernizes parking assets with one streamlined service
      covering enforcement, payment collection, maintenance and more.
    </Box>

    <ButtonGroup gap="2" display="flex" justifyContent="center" mb="20" >
      <Button colorScheme="black" fontSize="12px" variant="outline" size="md">
        Contect Customer Support
      </Button>
      <Button size="md" fontSize="12px" bg="black" color="white" hower={{bg:"white", color:"black"}}> Talk To Sales </Button>
    </ButtonGroup>
  </Box>
  )
}

export default Part1
