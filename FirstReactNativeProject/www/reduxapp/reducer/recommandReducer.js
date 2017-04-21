/**
 * Created by zhangjunimust on 17/4/21.
 */
import {CHANGETOYAODI,CHANGETOWENZHANG} from './../constants.js'
const initialState = {imageName:"文章",trueLove:true};

export default function languageReducer(state=initialState,action)
{
    switch(action.type)
    {
        case CHANGETOYAODI:
        {
            return({...this.state,imageName:'姚笛',trueLove:false});
        }
        case CHANGETOWENZHANG:
        {
            return({...this.state,imageName:'文章',trueLove:true});
        }
    }
    console.log("================change image by reducer==================="+JSON.stringify(state));
    return state;
}
