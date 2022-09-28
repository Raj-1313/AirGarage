import {
    Box,
  Button,
  ButtonGroup,
  Container,
  Image,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import Part2 from '../Home_Parts/Part2';
// import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
const HomePage = () => {
  return (
    <Box w="100%">
      <Navbar/>
      <Spacer/>
      <Image
        p="10"
        m="auto"
        src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ba98799d47da0806a85703_ag-p-500.png"
        w="25vw"
      />
      <Box>
        <Text fontSize="35px" fontFamily="Retroica, sans-serif" textAlign="center" p="2" fontWeight="Bold">
          Parking Operations for the 21st Century
        </Text>
        <Box  w="75%" fontSize="20px" m="auto" textAlign="center" mb="30px">
          AirGarage modernizes parking assets with one streamlined service
          covering enforcement, payment collection, maintenance and more.
        </Box>

        <ButtonGroup gap="2" display="flex" justifyContent="center" mb="20" >
          <Button colorScheme="black" fontSize="12px" variant="outline" size="md">
            Contect Customer Support
          </Button>
          <Button size="md" fontSize="12px" bg="black" color="white" hower={{bg:"white", color:"black"}}> Talk To Sales </Button>
        </ButtonGroup>
      </Box>
      <Part2/>
    </Box>
  );
};

export default HomePage;
