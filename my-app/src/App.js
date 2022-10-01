import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
// import Footer from './Components/Footer';
// import Navbar from './Components/Navbar';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import HomePage from './Pages/HomePage';
import AllRoute from './Routes/AllRoute';

function App() {
  return (
    // <ChakraProvider theme={theme}>
    <AllRoute/>
      //  </ChakraProvider>
    // <Navbar/>
    // <Footer />
    //   <Box textAlign="center" fontSize="xl">
    //     <Grid minH="100vh" p={3}>
    //       <ColorModeSwitcher justifySelf="flex-end" />
    //       <VStack spacing={8}>
    //         <Logo h="40vmin" pointerEvents="none" />
    //         <Text>
    //           Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
    //         </Text>
    //         <Link
    //           color="teal.500"
    //           href="https://chakra-ui.com"
    //           fontSize="2xl"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Learn Chakra
    //         </Link>
    //       </VStack>
    //     </Grid>
    //   </Box>
  );
}

export default App;
