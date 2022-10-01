import { Badge, Box, Button, Container, Flex,Grid,GridItem,Hide,IconButton,Image,  Menu,  MenuButton,  MenuItem,  MenuList,  Show,  Spacer } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import {AuthContext} from '../Context/AuthContect'
import { Link } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { HamburgerIcon} from '@chakra-ui/icons'
const Navbar = () => {
const {state,dispatch} = useContext(AuthContext);
const toast =useToast();
const handleLogOut = () => {
  console.log("object");
dispatch({type:"logoutState"})
  
    toast({
      title: 'Account Deactivate.',
      description: "The parternership we shared is NO_MORE",
      status: 'warning',
      duration: 3000,
      isClosable: true,  }) 
     }


  return (
   <Box  boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' >

      <Grid w="70%" m="auto" display="flex" templateColumns='repeat(2, 1fr)'>
  <GridItem p='4'>
  <Image
   src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5d55f8a49a649a59aab64b1c_airgarage-logo.png"
   w='15vh'>
            </Image>
  </GridItem>
  <Spacer />

<Show below='md' >
<Menu >
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
    />
  <MenuList p='3' textAlign='center' >
    {/* <MenuItem  */}
    <Button p="2" w="100%" mb="2"  borderRadius='13' fontSize="sm">
         <Link to="/findparking">Find parking</Link>
         </Button>
    {/* </MenuItem> */}
    <Spacer/>
     {
       state.isAuthenticated? <Button m='auto' w="100%" mb="2"  p='2' borderRadius='13' onClick={handleLogOut} fontSize="sm">LOGOUT</Button>:<Button p="2"  borderRadius='13' w="100%" mb="2"  fontSize="sm"><Link to="/login">Login</Link></Button>
      }
      <Spacer/>
    <Button w="100%" mb="2"  size='md'>Contect Customer Support</Button>         
      <Spacer/>
         <Button w="100%"  size='md'> Talk To Sales </Button>        
  </MenuList>
</Menu>
</Show>


<Hide below="md" >

  <GridItem  p='4'>
         <Flex gap="3">
         <Badge p="2"  m='auto'  borderRadius='13' fontSize="sm">
         <Link to="/findparking">Find parking</Link>
         </Badge>

         {
           state.isAuthenticated? <Button m='auto' p='2' borderRadius='13' onClick={handleLogOut} fontSize="sm">LOGOUT</Button>:<Badge p="2"  m='auto'  borderRadius='13'  fontSize="sm"><Link to="/login">Login</Link></Badge>
           
           
          }
         <Button colorScheme='black' variant='outline' size='md'>Contect Customer Support</Button>         
         <Button size='md'> Talk To Sales </Button>         
         </Flex>
  </GridItem>
           </Hide>
</Grid>
          </Box>
  )
}

export default Navbar
