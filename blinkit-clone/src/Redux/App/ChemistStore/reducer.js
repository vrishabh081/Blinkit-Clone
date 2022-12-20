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
        case types.REQUEST_CHEMIST_STORE:
            return {...oldState, isLoading : true}
        
        case types.SUCCESS_CHEMIST_STORE:
            return {...oldState, isLoading : false, data : payload}

        case types.ERROR_CHEMIST_STORE:
            return {...oldState, isLoading : false, isError : true}

        default:
            return {...oldState}
    }
}