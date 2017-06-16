/**
 * Created by zhangjunimust on 17/4/21.
 */
import React from 'react'
import {Component} from 'react-native'
import {Provider} from 'react-redux'
import {createLogger} from 'redux-logger'
import {createStore,applyMiddleware,combineReducers} from 'redux'



import Main from './../common/Main.js'
import languageReducer from './../reduxapp/reducer/languageReducer.js'
import recommandReducer from './../reduxapp/reducer/recommandReducer.js'

//声明组合reducer
const rootReducer=combineReducers({
    language:languageReducer,
    recommand:recommandReducer
});
//创建中间件logger对象
const logger=createLogger();
//创建store
const store=createStore(rootReducer,applyMiddleware(logger));
window.store=store;

const MainClass=()=>{
    return(
        <Provider store={store}>
            <Main store={store}/>
        </Provider>
    );
}

AppMain=MainClass;
export default AppMain;