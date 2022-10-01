import { Container,Text } from '@chakra-ui/react'
import React from 'react'

const Container_compo = ({link,title,desc}) => {
  return (
    
       <Container borderRadius={25}        
          w={{base:'60vw',sm:'90%',md:'160px',lg:'100%'}} 
          h={{base:'200px',sm:'auto',md:'240px',lg:'260px'}} 
           >

   <img width="30%" src={link} alt="" style={{marginTop:"10px", hower:{marginTop:'50px'}}} />   

      <Text fontSize="2vw" fontFamily="Retroica, sans-serif" fontWeight="bold" p="2" >{title}</Text>
      <Text fontSize="10px" mb="13px">{desc}</Text>
   
   </Container>
    
  )
}

export default Container_compo
