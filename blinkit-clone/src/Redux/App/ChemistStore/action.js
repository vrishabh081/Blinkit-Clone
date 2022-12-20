import * as types from "./actionType"
import axios from "axios";


// getChemistStore function-
export const getChemistStore = () => (dispatch) =>
{
    dispatch({type : types.REQUEST_CHEMIST_STORE})
    return axios.get(`https://blinkit-database-vercel.vercel.app/ChemistStore`)
    .then(res=>{
        dispatch({type : types.SUCCESS_CHEMIST_STORE, payload : res.data})
        // console.log(res.data)
    })
    .catch(err=>dispatch({type : types.ERROR_CHEMIST_STORE}))
}