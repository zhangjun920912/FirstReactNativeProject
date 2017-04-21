/**
 * Created by zhangjunimust on 17/4/21.
 */
import {CHANGETOYAODI,CHANGETOIMAGE} from './../constants.js'
const initialState = {imageName:""};

export default function languageReducer(state=initialState,action)
{
    switch(action.type)
    {
        case CHANGETOYAODI:
        {
            state.imageName="姚笛";
        }
        case CHANGETOIMAGE:
        {
            state.imageName="文章";
        }
    }
    return state;
}
