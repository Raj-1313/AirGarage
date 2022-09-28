import { Box, Button, Container, Flex,Image, Link, Spacer } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Container  minW="100vw">
      <Flex w="70vw" m={"auto"}>
  <Box p='4'>
  <Image
            src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5d55f8a49a649a59aab64b1c_airgarage-logo.png"
            width={'130px'}
          ></Image>
  </Box>
  <Spacer />
  <Box p='4'>
         <Flex gap="3">
         <Link p="1" fontSize="sm">Find parking</Link>
         
         <Link p="1" fontSize="sm">Login</Link>
         
         <Button colorScheme='black' variant='outline' size='md'>Contect Customer Support</Button>         
         <Button size='md'> Talk To Sales </Button>         
         </Flex>
  </Box>
</Flex >
    </Container>
  )
}

export default Navbar
