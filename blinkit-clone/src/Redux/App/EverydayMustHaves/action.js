import * as types from "./actionType"
import axios from "axios";


// getEverydayMustHaves function-
export const getEverydayMustHaves = () => (dispatch) =>
{
    dispatch({type : types.REQUEST_DAILY_ITEMS})
    return axios.get(`https://blinkit-database-vercel.vercel.app/EverydayMustHaves`)
    .then(res=>{
        dispatch({type : types.SUCCESS_DAILY_ITEMS, payload : res.data})
        // console.log(res.data)
    })
    .catch(err=>dispatch({type : types.ERROR_DAILY_ITEMS}))
}
