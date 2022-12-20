import {legacy_createStore, combineReducers, applyMiddleware} from "redux";
import { reducer as BiscuitsSnacksChocolates } from "./App/BiscuitsSnacksChocklates/reducer";
import { reducer as ChemistStore } from "./App/ChemistStore/reducer";
import { reducer as EverydayMustHaves } from "./App/EverydayMustHaves/reducer";
import { reducer as HomePageItems } from "./App/HomePageItems/reducer";
import { reducer as PersonalCare } from "./App/PersonalCare/reducer";
import { reducer as TopCarousel } from "./App/TopCarousel/reducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers ({
    BiscuitsSnacksChocolates,
    ChemistStore,
    EverydayMustHaves,
    HomePageItems,
    PersonalCare,
    TopCarousel
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))