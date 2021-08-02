import {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

//initial state
var initialState = {
    user:{}

}


//create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) =>
{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function setUser(user){
        dispatch({
            type: 'LOGIN',
            payload: user
        }
        )
    }
    function Logout(){
        dispatch({
            type: 'LOGOUT',
            payload: null
        }
        )
    }

    return(<GlobalContext.Provider value = {{
        user: state.user,
        setUser,
        Logout
    }}>
        {children}
    </GlobalContext.Provider>)
}