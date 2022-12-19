import * as types from "./actionType"
import axios from "axios";

// getTopCarouselData function-
export const getData = () => (dispatch) =>
{
    dispatch({type : types.Request})
    return axios.get(`https://blinkit-database-vercel.vercel.app/data`)
    .then(res=>{
        dispatch({type : types.Success, payload : res.data})
        // console.log(res.data)
    })
    .catch(err=>dispatch({type : types.Failed}))
}
