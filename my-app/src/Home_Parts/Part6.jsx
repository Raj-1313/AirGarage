import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'

const Part6 = () => {
  return (
    <Tabs variant='unstyled'>
  <TabList>
    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Tab 1</Tab>
    <Tab _selected={{ color: 'white', bg: 'green.400' }}>Tab 2</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
  )
}

export default Part6
