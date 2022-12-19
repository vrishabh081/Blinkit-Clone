import "./Style/TopItems.css"
import { useSelector } from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Skeleton } from 'antd';

export function TopItems()
{
  const topCarouselData = useSelector(store=>store.AppReducer);
  const {isLoading, isError, data} = topCarouselData
  // console.log(data)
  // // console.log(topCarouselData)

  return(
    <div id="top-items">
      {data.length !== 0 && data[0].HomePageItems.map(el=>
        <div key={el.id}>
          <LazyLoadImage 
            id="top-items-images" 
            src={el.image} 
            alt={el.id} 
            effect="blur" 
            placeholderSrc={process.env.PUBLIC_URL + ""} 
          />
        </div>
      )}
    </div>
  );
}