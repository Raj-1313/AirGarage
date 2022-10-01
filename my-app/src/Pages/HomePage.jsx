import {    Box,  Button,  ButtonGroup,  Container,  Image,  Spacer,  Text,} from '@chakra-ui/react';
import React from 'react';
import Part2 from '../Home_Parts/Part2';
import Page3 from '../Home_Parts/Page3';
import Part4 from '../Home_Parts/Part4';
import Part6 from '../Home_Parts/Part6';
import Grey_part from '../Home_Parts/Grey_part';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const HomePage = () => {
const arr=[{title:"Best-in-class Economics",link:"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a1f28039ee32a88bdfae6_cover.png",desc:"Increase Net Operating Income at your property by up to 50% vs other parking operators."},
{title:"You're in Control",link:"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a1f2937a53c7a2bfb65b7_slider.png",desc:"Need to reserve spaces for customers or validate employee vehicles? Our system was built with multi-use cases in mind."},
    {title:"Always On Enforcement",link:"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a1f2957e7c929611df3bb_secure.png",desc:"AirGarage's proprietary network of enforcement officers scans day and night so you don't have to stress about violators."}
]
const arr1=[{title:"Reporting & Analytics",link:"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ac207311fbe70d9afcad50_bar.png",desc:"Forecast occupancy and maximize your revenue with transparent data."},
{title:"Historical trends",link:"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ac207363f6b974468c3cab_pie.png",desc:"View your property's performance over time and track its progress."},{title:"Real-time updates",link:"https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ac20734d588b250051fd79_fast.png",desc:"Your dashboard updates with each parking rental as it happens. No more waiting for end of month reports."}
]


  return (
    <Box w="100%">
      {
        <Box pos='fixed' w="100%" zIndex={2}  bg='white'>
      <Navbar/>
        </Box>


      }
      <Spacer/>
      <Image p="10" m="auto" src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ba98799d47da0806a85703_ag-p-500.png" w="25vw" />
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
      <Page3/>
      <Part4 value={arr} heading='Our value proposition' text="We've built the operating system for parking management, infusing technology into every facet of the business."/>

      <Grey_part heading='Get a better deal today' text='Send us your parking management contract and get a counter offer in 24 hours'/>

      <Part4 value={arr1} heading="Transparent and Data Driven" text="We share all of our data with you in real time, so you’re always aware what’s happening on your property."/>

      <Part6/>
      <Grey_part  heading='Learn how we work for you' text='Talk to sales today' />
      <Footer></Footer>
    </Box>
  );
};

export default HomePage;
