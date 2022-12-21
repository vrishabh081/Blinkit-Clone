import {Routes, Route} from "react-router-dom";
import { BiscuitChock } from "../Pages/BiscuitSnacks";
import { ChemistStore } from "../Pages/ChemistStore";
import { EverydayMustHaves } from "../Pages/EverydayMustHave";
import { Home } from "../Pages/Home";
import { PersonalCare } from "../Pages/PersonalCare";

export function AllRoutes()
{

    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/everydayitems" element={<EverydayMustHaves/>} />
            <Route path="/biscuitchock" element={<BiscuitChock/>} />
            <Route path="/personalcare" element={<PersonalCare/>} />
            <Route path="/chemiststore" element={<ChemistStore/>} />
        </Routes>
    )
}