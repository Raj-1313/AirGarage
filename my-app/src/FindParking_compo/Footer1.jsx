import { Box, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Footer1 = () => {
  return (
    <Box position="Bottom" w='100vw'>

      <Box h="10vh" bg="#fa824c" textAlign="center">
      <Container color="white" textAlign="center">

        <Text>©2021 AirGarage, Inc</Text>
        <Flex justifyContent="center" gap="3">
        <Text>Homepage</Text>
        <Text>Terms</Text>
        <Text>Contect us</Text>
        </Flex>

      </Container>
      </Box>
    </Box>
  )
}

export default Footer1
