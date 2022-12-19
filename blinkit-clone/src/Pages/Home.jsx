import { BiscuitsSnacksChocolates } from "../Components/BiscuitChock";
import { ChemistStore } from "../Components/ChemistStore";
import { EveryDayProduct } from "../Components/EveryDayProduct";
import { PersonalCare } from "../Components/PersonalCare";
import { TopCarousel } from "../Components/TopCarousel";
import { TopItems } from "../Components/TopItems";

export function Home()
{

    return (
        <div>
            <TopCarousel/>
            <TopItems/>
            <PersonalCare/>
            <EveryDayProduct/>
            <ChemistStore/>
            <BiscuitsSnacksChocolates/>
        </div>
    );
}