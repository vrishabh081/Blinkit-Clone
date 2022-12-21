import { BiscuitChock } from "../Components/BiscuitChock";
import { ChemistStore } from "../Components/ChemistStore";
import { EverydayMustHaves } from "../Components/EverydayMustHaves";
import { HomePageItems } from "../Components/HomePageItems";
import { PersonalCare } from "../Components/PersonalCare";
import { TopCarousel } from "../Components/TopCarousel";

export function Home()
{

    return (
        <div>
            <TopCarousel/>
            <HomePageItems/>
            <EverydayMustHaves/>
            <BiscuitChock/>
            <PersonalCare/>
            <ChemistStore/>
            
        </div>
    );
}