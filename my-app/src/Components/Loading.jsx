import { Spinner } from '@chakra-ui/react'
import { useContext } from "react"
import {AuthContext} from "../Context/AuthContect"
import {Navigate} from "react-router-dom"

const Loading = () => {
const {state}=useContext(AuthContext)
  if(!state.loading){
  return <Navigate to="/locationData"></Navigate>
}

  return (
    <div style={{height:"100vh" ,backgroundColor:"orange"}} >
       <Spinner size='xl' mt='20%' ml='50%'  />
    </div>
  )
}

export default Loading
