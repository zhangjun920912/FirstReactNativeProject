/**
 * Created by zhangjunimust on 17/4/21.
 */
import React from 'react'
import {Component} from 'react-native'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,combineReducers} from 'redux'


import Main from './../common/Main.js'
import languageReducer from './../reduxapp/reducer/languageReducer.js'
import recommandReducer from './../reduxapp/reducer/recommandReducer.js'

const rootReducer=combineReducers({
    language:languageReducer,
    recommand:recommandReducer
});
const store=createStore(rootReducer);
window.store=store;
const MainClass=()=>{
    return(
        <Provider store={store}>
            <Main/>
        </Provider>
    );
}

AppMain=MainClass;
export default AppMain;