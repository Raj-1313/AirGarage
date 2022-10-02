import {
  Text,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Grid,
  Box,
  Hide,
  Spinner,
} from '@chakra-ui/react';
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContect';
import { Navigate } from 'react-router-dom';
import Loading from '../Components/Loading';
import data from '../FindParking_compo/db.json';
const Input_compo = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [modeType, settype] = useState('');
  const [navigate, setNavigate] = useState(false);
  const [sugges, setsugges] = useState([]);
  const [location, setLocation] = useState({
    lat: '',
    lon: '',
  });
  const [locationName, setLocationName] = useState('');

  const getData = (lon, lat, time) => {
    if (state.isLoading) {
      return <Loading />;
    }
    axios
      .get(
        `https://api.airgarage.com/api/spots/?lite=true&lat=${lat}&lon=${lon}&rentalDuration=${time}`
      )
      .then(
        res => dispatch({ type: 'DATA', payload: res.data }),
        setNavigate(true),
        dispatch({ type: 'NOLOADING' })
      )
      .catch(err => console.log(err));
  };

  const GetData = country => {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${country}&limit=10&appid=dcb77b0098b3350f151fac655e8d374a`
      )
      .then(res => setLocation({ lat: res.data[0].lat, lon: res.data[0].lon }))
      .catch(err => setLocation({ lat: 34.0522342, lon: -118.2436849 }));
  };

  const HandleChange = e => {
    GetData(e.target.value);
    setLocationName(e.target.value);

    let y = data.List.filter(ele => {
      return ele.includes(e.target.value);
    });
setsugges(y);
    dispatch({ type: 'COUNTRY', payload: e.target.value });
  };

  const onSubmit = e => {
    const { lat, lon } = location;
    dispatch({ type: 'LOADING' });
    getData(lon, lat, modeType);
  };

  if (navigate) {
    return <Navigate to="/locationData"></Navigate>;
  }

  return (
    <Box m="auto" w="90%" p="10">
      <Container
        textAlign="center"
        w={{ base: '60vw', sm: '60vw', md: '70vw', lg: '60vw' }}
      >
        <Text
          fontSize={{ base: '20px', sm: '30px', md: '40px', lg: '30px' }}
          as="b"
          mb="10"
        >
          Find Parking
        </Text>
        <Hide below="sm">
          <Text fontSize="12px">100s of spots available near you</Text>
        </Hide>
      </Container>
      <FormControl>
        <Grid
          m="auto"
          mt="4%"
          templateColumns={{
            base: 'repeat(1,1fr)',
            sm: 'repeat(1,1fr)',
            md: 'repeat(3,1fr)',
            lg: 'repeat(3,1fr)',
          }}
        >
          <Container mt={{ base: '10', sm: '10', md: '0', lg: '0' }}>
            <FormLabel>LOCATION</FormLabel>
            <Input
              type="name"
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              placeholder="Enter an address"
              onChange={HandleChange}
            />
    {sugges.length>0 && <Box overflowY='scroll' p="3" maxH='150px'>
              {sugges.map((item)=><Text _hower={{bg:"red"}}>{item}</Text>)}
            </Box>}
          </Container>
          <Container mt={{ base: '20px', sm: '10', md: '0' }}>
            <FormLabel>TYPE</FormLabel>
            <Select
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              defaultValue="monthly"
              onChange={e => settype(e.target.value)}
            >
              <option value="monthly">Monthly</option>
              <option value="hourly">Hourly</option>
              <option value="airport">Airport</option>
            </Select>
          </Container>
          <Button
            p={{ base: '5', sm: '6', md: '5', lg: '5' }}
            m="auto"
            mt={{ base: '29px', sm: '15px', md: '30px', lg: '30px' }}
            boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
            onClick={onSubmit}
          >
            SEARCH
          </Button>
        </Grid>
      </FormControl>
    </Box>
  );
};

export default Input_compo;
