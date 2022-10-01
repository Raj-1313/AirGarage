import {  Box,  Container,  Image,  Text,  VStack,  Divider,  Center,  Grid,  GridItem,} from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box
    cursor='pointer'
    boxShadow= 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'
    bg={'#fec'} p="30" w="100vw" color={'#fa824c'}>
      <Container minW="80vw">
        <Box display={{sm:'flex',md:'grid',lg:'flex'}} justifyContent={'space-between'}>
          <Image
            Image
            src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5d55f8a49a649a59aab64b1c_airgarage-logo.png"
            width={{base:"120px",sm:'150px',md:"160px", lg:'150px'}}
            h='auto'
          ></Image>
          <Text fontSize="sm"> 21st Century Parking Operator</Text>
        </Box>
        <Grid
          templateColumns={{ base: 'repeat(1,1fr)', sm: 'repeat(2,1fr)',  md: 'repeat(4,1fr)', lg: 'repeat(4,1fr)' }}
          mt="16"
        >
          <GridItem colSpan={1}>
            <VStack h="200px" alignItems="left">
              <Text fontSize="md">Company</Text>
              <Text fontSize="xs">About</Text>
              <Text fontSize="xs">Carrer</Text>
              <Text fontSize="xs">FAQ</Text>
              <Text fontSize="xs">Contact customer support</Text>
              <Text fontSize="xs">Privacy Policy</Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={1}>
            <VStack h="200px" alignItems={'left'}>
              <Text fontSize="md">User </Text>
              <Text fontSize="xs">Hotels</Text>
              <Text fontSize="xs">Garages</Text>
              <Text fontSize="xs">Surface Lots</Text>
              <Text fontSize="xs">Airport</Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={1}>
            <VStack alignItems={'left'} h="200px">
              <Text fontSize="md">Features</Text>
              <Text fontSize="xs">Access control</Text>
              <Text fontSize="xs">Parking management</Text>
              <Text fontSize="xs">Payment collection</Text>
              <Text fontSize="xs">Gate arm alternative</Text>
            </VStack>
          </GridItem>
          <GridItem colSpan={1}>
            <VStack alignItems={'right'} textAlign="right" h="200px">
              <Text fontSize="md">Find parking</Text>
              <Text fontSize="xs">an IOS app </Text>
              <Text fontSize="xs">on Andriod app</Text>
              <Text fontSize="xs">on web </Text>
            </VStack>
          </GridItem>
        </Grid>

        <Center height="80px" mb="-30px">
          <Divider orientation="horizontal" backgroundColor={'red'} />
        </Center>
        <Box mb="10px">
          {' '}
          <Text fontSize="xs">© 2022 AirGarage Inc</Text>{' '}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
