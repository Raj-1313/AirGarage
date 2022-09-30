import {useContext} from 'react'
import {Navigate} from "react-router-dom"
import {AuthContext} from "../Context/AuthContect"

function PrivateRoute({children}) {
  const {state} = useContext(AuthContext)
    {

        if(state.isAuthenticated){
            return children
        }
        return <Navigate to="/login" />
    }
  
}

export default PrivateRoute
