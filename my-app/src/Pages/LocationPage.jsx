import { AuthContext } from '../Context/AuthContect';
import { useContext, useState,useEffect } from 'react';
import Card_location from '../Components/Card_location';
import { Link, Navigate } from 'react-router-dom';
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import Loading from '../Components/Loading';

const LocationPage = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [navigate, setNavigate] = useState(false);


  useEffect(()=>{  
    dispatch({type:"LOADING"});
     setTimeout(()=>{
       dispatch({type:"NOLOADING"});
     },1000)
     
  },[])




  function handleID(e) {
    dispatch({ type: 'CARDINDIVIDUAL', payload: e });
    localStorage.setItem('CARDINDIVIDUAL', JSON.stringify(e));
    setNavigate(true);
  }

  if (navigate) {
    return <Navigate to="/carddetails" />;
      }

if(state.isLoading){
  return <Loading/>
}

  return (
    <Grid
      templateColumns={{
        base: 'repeat(1,1fr)',
        md: 'repeat(1,1fr)',
        lg: 'repeat(2,1fr)',
      }}
      w='80%'
      m='auto'
      gap={5}
    >
      <GridItem>
        <Link to="/">
          {' '}
          <ArrowBackIcon /> Search
        </Link>
        <Text color="grey" fontWeight="bolder">
          PARKING IN
        </Text>
        <Heading>{state.country}</Heading>
        {state.data &&
          state.data.map(item => (
            <Card_location
              key={item.uuid}
              functionClick={() => handleID(item)}
              item={item}
              props={{
                url: item.photo_url,
                name: item.name,
                address: item.address.address_line1,
                address1: item.address.address_line2,
                address2: item.address.city,
                address3: item.address.state,
                address4: item.address.zipcode,
                price: item.display_price,
              }}
            />
          ))}
      </GridItem>

      <GridItem
          display={{ base: 'none', sm: 'none', md: 'none',lg:"block" }}
        >
        <Box
          p="2"
          border="4px solid white"
          mt="16"
          borderRadius="12"
          pos="fixed"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          <iframe
            width="600"
            height="500"
            style={{ margin: 'auto', borderRadius: '12px' }}
            src={`https://maps.google.com/maps?q=${state.country}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            frameborder="0"
            scrolling="no"
          ></iframe>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default LocationPage;
