import { Box, Container, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Footer1 from '../FindParking_compo/Footer1'
import Input_compo from '../FindParking_compo/Input_compo'

const Find_Parking = () => {
  return (
    <>
    <Container  position='absolute' >
     <Link to='/'> <Image src="https://render-webpay.airgarage.com/static/media/AirGarage.919cc784.png" alt="img" w={{base:'60px',sm:'80px',md:'100px',lg:'120px'}}/></Link>
    </Container>
    
    <Box p='10'>
    <Input_compo/>
    </Box>

    <Box pos='fixed' bottom="0" w="100%" zIndex={2}  bg='white'>
    <Footer1  />
    </Box>
  </>
  )
}

export default Find_Parking
