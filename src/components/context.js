import React, { useContext, useReducer } from 'react'
import { reducer } from './reducer';

const studentContext = React.createContext();

const initialState = {
    students : []
}
function AppProvider({ children }){
    const [state,dispatch] = useReducer(reducer,initialState)

    return(
        <studentContext.Provider value={{
            state,
        }}>
            { children }
        </studentContext.Provider>
    )

}

export const GlobalContext = () =>{
    return useContext(studentContext)
}

export default AppProvider