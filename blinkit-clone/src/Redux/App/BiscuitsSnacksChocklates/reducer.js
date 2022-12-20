import * as types from "./actionType"

const initState = {
    data : [],
    isLoading : false,
    isError : false,
}

export const reducer = (oldState = initState, action)=>
{
    const {type, payload} = action;
    // console.log(action)
    switch(type)
    {
        case types.REQUEST_BISCUIT_SNACKS_CHOCKLATES:
            return {...oldState, isLoading : true}
        
        case types.SUCCESS_BISCUIT_SNACKS_CHOCKLATES:
            return {...oldState, isLoading : false, data : payload}

        case types.ERROR_BISCUIT_SNACKS_CHOCKLATES:
            return {...oldState, isLoading : false, isError : true}

        default:
            return {...oldState}
    }
}