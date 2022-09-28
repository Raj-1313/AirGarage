import { Box, Container, Flex, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const Part2 = () => {
  return (
    <Box w="70%" border="1px solid red" m="auto">
    <Flex  >
        <Container  >
            <Image  src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/62eac05575f75fbd765956a9_garage-1-a-p-500.png"></Image>
             </Container>

        <Container>
            <Text>Partner with AirGarage</Text>
            <Text>AirGarage is a full service parking operator. We handle all of the day-to-day logistics that go into making your parking lot or garage the most successful version of itself.
<Spacer/>
We operate hundreds of parking lots and garages across the United States and Canada on behalf of landlords, property managers, and other real estate operators. Our focus is using technology to lower operational overhead and increase your net parking income.
<Spacer/>

We're already maximizing returns for top-tier real estate owners:</Text>

        <Container>
        <Flex mt="5" gap="100px">
            <Image  boxSize='15%' src='https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5ff4db28ba55b4f84383d98f_1200px-Starwood_Hotels_and_Resorts_logo.svg-p-500.png'/>
            <Image  boxSize='15%' src='https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a3a18e780fad25095c2c4_marriot-p-500.png'/>
            <Image  boxSize='15%' src='https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f173b38239bc4f42286ffab_hilton-p-500.png'/>
        </Flex>
        </Container>
        </Container>
    </Flex>
    </Box>
  )
}

export default Part2
