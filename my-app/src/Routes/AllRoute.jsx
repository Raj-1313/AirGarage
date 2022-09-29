import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Find_Parking from '../Pages/Find_Parking';
import HomePage from "../Pages/HomePage"
const AllRoute = () => {
  return (
    <div>
         <Routes>
            <Route path="/" element={<HomePage/>} ></Route>
            <Route path="/findparking" element={<Find_Parking/>} ></Route>
            </Routes>      
    </div>
  )
}

export default AllRoute
