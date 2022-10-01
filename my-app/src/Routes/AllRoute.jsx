import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Find_Parking from '../Pages/Find_Parking';
import HomePage from "../Pages/HomePage"
import LocationPage from '../Pages/LocationPage';
import CardDetails from '../Pages/CardDetails';
import Login from '../Pages/Login';
import PrivateRoute from '../Components/PrivateRoute';
import Loading from '../Components/Loading';
const AllRoute = () => {
  return (
    <div>
         <Routes>
            <Route path="/" element={<HomePage/>} ></Route>
            <Route path="/login" element={<Login/>} ></Route>
            <Route path="/carddetails" element= { <PrivateRoute> <CardDetails/> </PrivateRoute>}/>
            <Route path="/findparking" element={<Find_Parking/>} ></Route>
            <Route path="/locationData" element={<LocationPage/>} ></Route>
            <Route path="/loading" element={<Loading/>} ></Route>
            </Routes>      
    </div>
  )
}

export default AllRoute
