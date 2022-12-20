import * as types from "./actionType"
import axios from "axios";


// getBiscuitSnacks function-
export const getBiscuitSnacks = () => (dispatch) =>
{
    dispatch({type : types.REQUEST_BISCUIT_SNACKS_CHOCKLATES})
    return axios.get(`https://blinkit-database-vercel.vercel.app/BiscuitsSnacksChocolates`)
    .then(res=>{
        dispatch({type : types.SUCCESS_BISCUIT_SNACKS_CHOCKLATES, payload : res.data})
        // console.log(res.data)
    })
    .catch(err=>dispatch({type : types.ERROR_BISCUIT_SNACKS_CHOCKLATES}))
}