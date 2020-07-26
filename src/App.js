import React, { useEffect, useReducer} from 'react';
import './App.css';
import './styles/styles.scss';
import UIElement from './components/UIElement';
import Header from "./components/Header";
import tokenReducer, {updateTokenAction} from './reducers/tokenReducer';
import BoxContext from './context/BoxContext';
import UserInfo from "./components/UserInfo";

const axios = require('axios');

function App() {
    let initialState = {
        token: null
    }

    let [state, dispatch] = useReducer(tokenReducer, initialState);

    // Get a token when the app loads
   	useEffect(() => {
   		axios.get('/token')
   			.then((response) => {
   				dispatch({
   					type: updateTokenAction,
   					token: response.data.token
   				});
   			})
   	},[])

    return (
        <div className="App content-container">
            <BoxContext.Provider value={{state, dispatch}}>
            <Header/>
            {state.token && <UserInfo/>}
            <UIElement/>
            </BoxContext.Provider>
        </div>
    );
}

export default App;
