import { AllRoutes } from "./Routes/AllRoutes";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";

export function App ()
{
  return (
    <div id="main-div">
      {/* <Navbar/> */}
      <AllRoutes/>
    </div>
  );
}