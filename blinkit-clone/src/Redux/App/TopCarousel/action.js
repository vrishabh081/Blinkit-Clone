import * as types from "./actionType"
import axios from "axios";


// getTopCarousel function-
export const getTopCarousel = () => (dispatch) =>
{
    dispatch({type : types.REQUEST_TOP_CAROUSEL})
    return axios.get(`https://blinkit-database-vercel.vercel.app/TopCarousel`)
    .then(res=>{
        dispatch({type : types.SUCCESS_TOP_CAROUSEL, payload : res.data})
        // console.log(res.data)
    })
    .catch(err=>dispatch({type : types.ERROR_TOP_CAROUSEL}))
}