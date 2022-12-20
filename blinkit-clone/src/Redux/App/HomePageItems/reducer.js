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
        case types.REQUEST_TOP_ITEMS:
            return {...oldState, isLoading : true}
        
        case types.SUCCESS_TOP_ITEMS:
            return {...oldState, isLoading : false, data : payload}

        case types.ERROR_TOP_ITEMS:
            return {...oldState, isLoading : false, isError : true}

        default:
            return {...oldState}
    }
}