import { Box, Hide, Image, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'

const Part6 = () => {
  return (
    <Box w={{base:"90%",sm:'80%',md:"70%", lg:'70%'}}
    h={{base:"90%",sm:'80%',md:"70%", lg:'70%'}}
    m='auto'  borderRadius='13px' textAlign='center' mb='10'  >
    <Tabs size="sm" variant='soft-rounded' >
  <TabList >
    <Tab _selected={{ color: 'white', bg: 'blue.500' }} >Dashboard</Tab>
    <Tab _selected={{ color: 'white', bg: 'green.400' }}>Daily<br/> Performance</Tab>

    <Hide below='sm'>
    <Tab _selected={{ color: 'white', bg: 'red.600' }}>Online<br/> Listing Aggregation</Tab>
    </Hide>
  </TabList>
  <TabPanels boxShadow='rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' w='100%'>
    <TabPanel>
        <Image src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ad548421171b59d3dec8b7_dash-p-800.png"></Image>
    </TabPanel>
    <TabPanel>
     <Image src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ad55d0b5fc492169126b7a_graphs-p-800.png"></Image>
    </TabPanel>

    <TabPanel>
      <Image src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ad55d0cf2e6bf5f160cdb6_rentals-p-800.png"></Image>
    </TabPanel>
  </TabPanels>
</Tabs>
</Box>
  )
}

export default Part6
