import {useReducer, createContext} from 'react'
import reducer  from './Reducer'

export const AuthContext=createContext()



const AuthContectProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, {
    isAuthenticated: false,
    isAuthenticatedError: false,
    country: "",
    isLoading: false,
    data:[],
    individualData:{},
  })
// console.log(state);
  return (
      <AuthContext.Provider value={{dispatch,state}} >
        {children}
      </AuthContext.Provider>
      
  )
}

export default AuthContectProvider
