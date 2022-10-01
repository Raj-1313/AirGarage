import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Box, Container, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
  const CardDetails = () => {
  const [navToHome,setHome]=useState(false)
  const [navToFind,setFind]=useState(false)

const Card = JSON.parse(localStorage.getItem('CARDINDIVIDUAL'));
const {photo_url,address,display_price,name,price_monthly} =Card;
const {address_line1,address_line2,city,state,zipcode}=address;



if(navToHome){
  return <Navigate to='/'/>
}
if(navToFind){
  return <Navigate to='/findparking'/>
}

  return (
    <Box textAlign="center"   bgGradient='linear(to-r, orange.400, yellow.400, orange.400)' p="10" w="100vw" h="100vh"  >
      <Container bg='white'  borderRadius={20} p="10" >
            <Image borderRadius="10" boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' src={photo_url} mb="16"/>
           <Heading>{name}</Heading>
           <Text>{address_line1}{state}</Text>

<Container  border="1px solid" mt="10" p="4">
<Text>CURRENT RATE</Text>
<Text fontSize="25px" fontWeight="bold"  >${price_monthly} per month</Text>
</Container>
<Flex>
<Text fontSize="20px" >State:{state} </Text>
<Spacer></Spacer>
<Text fontSize="20px"   >ZipCode: {zipcode}</Text>
</Flex>

      </Container>
      <Container>

      <Flex >
      <Heading mt='20'  fontSize={20} _hover={{bg:"white",color:'orange', p:"2", borderRadius:'10'}} onClick={()=> setHome(true)}> <ArrowLeftIcon/> HOME</Heading>
      <Spacer/>
      <Heading mt='20' _hover={{bg:"white",color:'orange', p:"2", borderRadius:'10'}} fontSize={20} onClick={()=>setFind(true)}>FIND PARKING <ArrowRightIcon/></Heading>
      </Flex>
      </Container>

    </Box>
  )
}

export default CardDetails
