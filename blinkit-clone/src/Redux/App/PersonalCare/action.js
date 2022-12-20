import * as types from "./actionType"
import axios from "axios";


// getPersonalCare function-
export const getPersonalCare = () => (dispatch) =>
{
    dispatch({type : types.REQUEST_PERSONAL_CARE})
    return axios.get(`https://blinkit-database-vercel.vercel.app/PersonalCare`)
    .then(res=>{
        dispatch({type : types.SUCCESS_PERSONAL_CARE, payload : res.data})
        // console.log(res.data)
    })
    .catch(err=>dispatch({type : types.ERROR_PERSONAL_CARE}))
}