// SetUp the data layer
// We need this to track the basket

import React, {createContext, useContext, useReducer} from 'react';

// This is the data layer
export const StateContext = createContext();

// Build a provider: We would wrap our entire app inside this provider and give access to the datalayer we created
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext); 

