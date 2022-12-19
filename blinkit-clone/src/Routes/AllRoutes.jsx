import { useSelector } from "react-redux";
import {Routes, Route} from "react-router-dom";
import { Home } from "../Pages/Home";

export function AllRoutes()
{
    const topCarouselData = useSelector(store=>store.AppReducer);
    const {isLoading, isError, data} = topCarouselData
    // console.log(isLoading)

    return(
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    )
}