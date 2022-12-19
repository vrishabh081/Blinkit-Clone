import "./Style/EverydayItems.css"
import { useSelector } from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { CloseButton } from "@chakra-ui/react";

export function BiscuitsSnacksChocolates()
{
  const topCarouselData = useSelector(store=>store.AppReducer.data[0]);
//   console.log(topCarouselData)

  return(
    <div id="every-day-items">
        <div id="every-day-items-head">
            <h1>Biscuits Snacks and Chocklates</h1>
            <p>See all</p>
        </div>
        <div id="every-day-items-products">
            {topCarouselData !== undefined && topCarouselData.BiscuitsSnacksChocolates.map(el=>
                <div key={el.id}>
                <LazyLoadImage src={el.image} alt={el.id} effect="blur" />
                <p>{el.title}</p>
                <p>{el.quantity}</p>
                <div id="every-day-items-price-div">
                    <p>{el.price}</p>
                    <button>Add</button>
                </div>
                </div>
            )}
        </div>
    </div>
  );
}