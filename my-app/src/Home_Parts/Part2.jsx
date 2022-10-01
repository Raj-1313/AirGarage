import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const Part2 = () => {
  return (
    <Grid
      boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
    
      p="10px"
      m="auto"
      mb="50px"
      templateColumns={{
        base: 'repeat(1,1fr)',
        sm: 'repeat(2,1fr)',
        md: 'repeat(2,1fr)',
        lg: 'repeat(2,1fr)',
      }}
      w={{ base: '100%', sm: '80%', md: '70%', lg: '70%' }}
      gap="1"
    >
      <GridItem>
        <Image
        m='auto'
          h={{ base: '70%', sm: '70%', md: '70%', lg: '80%' }}
          w={{ base: '60%', sm: '80%', md: '73%', lg: '80%' }}
          src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/62eac05575f75fbd765956a9_garage-1-a-p-500.png"
        ></Image>
      </GridItem>

      <GridItem>
        <Text
          fontSize={{ base: '16px', sm: '20px', md: '25px', lg: '30px' }}
          fontFamily="Retroica, sans-serif"
          fontWeight="bold"
          p="2"
        >
          Partner with AirGarage
        </Text>
        <Text fontSize={{ base: '8px', sm: '10px', md: '12px', lg: '14px' }}>
          AirGarage is a full service parking operator. We handle all of the
          day-to-day logistics that go into making your parking lot or garage
          the most successful version of itself.
          <Spacer />
          We operate hundreds of parking lots and garages across the United
          States and Canada on behalf of landlords, property managers, and other
          real estate operators. Our focus is using technology to lower
          operational overhead and increase your net parking income.
          <Spacer />
          We're already maximizing returns for top-tier real estate owners:
        </Text>

        <Container>
          <Flex
            mt="5"
            gap={{ base: '15%', sm: '30px', md: '50px', lg: '40px' }}
            mb="20px"
          >
            <Image
              boxSize="15%"
              src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5ff4db28ba55b4f84383d98f_1200px-Starwood_Hotels_and_Resorts_logo.svg-p-500.png"
            />
            <Image
              boxSize="15%"
              src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a3a18e780fad25095c2c4_marriot-p-500.png"
            />
            <Image
              boxSize="15%"
              src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f173b38239bc4f42286ffab_hilton-p-500.png"
            />
          </Flex>
        </Container>
      </GridItem>
    </Grid>
  );
};

export default Part2;
