export default function reducer(state,action){
    switch(action.type){
      case "DATA": return {...state, data:action.payload}
      case "CARDINDIVIDUAL": return {...state, individualData:action.payload}
      case "authDone": return {...state, isAuthenticated:true}
      case "logoutState": return {...state, isAuthenticated:false}
    //   default : return state
    }
    }