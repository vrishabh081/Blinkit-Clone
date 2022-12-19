import "./Style/EverydayItems.css"
import { useSelector } from "react-redux";
import { Box, Button, Skeleton } from '@chakra-ui/react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Loader } from "./Loader";

export function EveryDayProduct()
{
  const topCarouselData = useSelector(store=>store.AppReducer.data[0]);
  console.log(topCarouselData)

  return(
    <div id="every-day-items">
        <div id="every-day-items-head">
            <h1>Personal Care</h1>
            <p>See all</p>
        </div>
        <div id="every-day-items-products">
            {topCarouselData !== undefined ? topCarouselData.PersonalCare.map(el=>
                <div key={el.id}>
                <LazyLoadImage src={el.image} alt={el.id} effect="blur" />
                <p>{el.title}</p>
                <p>{el.quantity}</p>
                <div id="every-day-items-price-div">
                    <p>{el.price}</p>
                    <Button colorScheme='green' variant='outline' size="xs">Add</Button>
                </div>
              </div>
            ) : <Skeleton height='80px' width="100%" /> }
        </div>
    </div>
  );
}