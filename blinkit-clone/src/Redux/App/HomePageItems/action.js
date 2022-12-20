import * as types from "./actionType"
import axios from "axios";


// getHomePageItems function-
export const getHomePageItems = () => (dispatch) =>
{
    dispatch({type : types.REQUEST_TOP_ITEMS})
    return axios.get(`https://blinkit-database-vercel.vercel.app/HomePageItems`)
    .then(res=>{
        dispatch({type : types.SUCCESS_TOP_ITEMS, payload : res.data})
        // console.log(res.data)
    })
    .catch(err=>dispatch({type : types.ERROR_TOP_ITEMS}))
}