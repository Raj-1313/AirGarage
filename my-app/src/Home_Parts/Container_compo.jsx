import { Container,Text } from '@chakra-ui/react'
import React from 'react'

const Container_compo = ({link,title,desc}) => {
  return (
    
       <Container borderRadius={25} h="300px" border="1px solid red">
   <img width="80px" src={link} alt="" />   
      <Text fontSize="30px" fontFamily="Retroica, sans-serif" fontWeight="bold" p="2" >{title}</Text>
      <Text fontSize="15px" mb="13px">{desc}</Text>
   
   </Container>
    
  )
}

export default Container_compo
