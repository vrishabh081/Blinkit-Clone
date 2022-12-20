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
        case types.REQUEST_DAILY_ITEMS:
            return {...oldState, isLoading : true}
        
        case types.SUCCESS_DAILY_ITEMS:
            return {...oldState, isLoading : false, data : payload}

        case types.ERROR_DAILY_ITEMS:
            return {...oldState, isLoading : false, isError : true}

        default:
            return {...oldState}
    }
}