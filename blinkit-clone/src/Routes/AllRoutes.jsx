import { useSelector } from "react-redux";
import {Routes, Route} from "react-router-dom";
import { Home } from "../Pages/Home";

export function AllRoutes()
{

    return(
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    )
}