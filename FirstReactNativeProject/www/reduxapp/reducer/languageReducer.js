/**
 * Created by zhangjunimust on 17/4/20.
 */
import {CHANGE_TOCHINESE,CHANGE_TOENGLISH} from './../constants.js'
const initialState = {en:null,zh:null};

export default function languageReducer(state=initialState,action)
{
    switch(action.type)
    {
        case CHANGE_TOCHINESE:
        {
            state.zh=true;
            state.en=false;
        }
        case CHANGE_TOENGLISH:
        {
            state.zh=false;
            state.en=true;
        }
    }
    return state;
}