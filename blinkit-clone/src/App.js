import { AllRoutes } from "./Routes/AllRoutes";
import "./App.css";
import { GetApp } from "./Components/GetApp";
import { FourSection } from "./Components/FourSection";

export function App ()
{
  return (
    <div id="main-div">
      <AllRoutes/>
      <GetApp/>
      <FourSection/>
    </div>
  );
}