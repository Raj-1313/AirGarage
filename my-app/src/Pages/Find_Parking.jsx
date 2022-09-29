import { Container } from '@chakra-ui/react'
import React from 'react'
import Footer1 from '../FindParking_compo/Footer1'
import Input_compo from '../FindParking_compo/Input_compo'

const Find_Parking = () => {
  return (
    <>
    <Container border="1px solid red">
      <img src="https://render-webpay.airgarage.com/static/media/AirGarage.919cc784.png" alt="" />
    </Container>
    <Input_compo/>
    <Footer1  />
    </>
  )
}

export default Find_Parking
