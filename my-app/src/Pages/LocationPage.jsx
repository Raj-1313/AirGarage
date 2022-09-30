import {AuthContext} from "../Context/AuthContect"
import { useContext,useState } from 'react'
import Card_location from "../Components/Card_location"
import { Navigate } from "react-router-dom"

const LocationPage = () => {
const {state,dispatch}=useContext(AuthContext)
const [navigate,setNavigate]=useState(false)

function handleID(e){
  dispatch({type:"CARDINDIVIDUAL",  payload:e});
  localStorage.setItem("CARDINDIVIDUAL", JSON.stringify(e));
  setNavigate(true)
}

if(navigate){
  return <Navigate to="/carddetails" />
}
  return (
    <>
   {
     
      (state.data) && state.data.map((item)=> 
      // console.log(item.display_price)
      <Card_location key={item.uuid}
      
      functionClick={()=>handleID(item)}
      item={item}
      props={{
        url:item.photo_url,
       name:item.name,
       address:item.address.address_line1,
       address1:item.address.address_line2,
       address2:item.address.city,
       address3:item.address.state,
       address4:item.address.zipcode,
       price:item.display_price, }} />
       
       
       )
    }
    </>
  )
}

export default LocationPage
