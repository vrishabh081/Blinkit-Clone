import React, { useEffect } from 'react'
import "./Style/TopCarousel.css";
import { useDispatch, useSelector } from 'react-redux'
import { getTopCarousel } from '../Redux/App/TopCarousel/action';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const TopCarousel = () => {
  const dispatch = useDispatch();
  const TopCarouselData = useSelector((store)=>store.TopCarousel);
  const {data, isLoading} = TopCarouselData;

  useEffect(()=>{
    dispatch(getTopCarousel())
  }, [])
  

  return (
    <div id='top-carousel'>
      {data.length > 0 && data.map(el=><div key={el.id}>
        <LazyLoadImage src={el.image} alt={el.id} effect="blur" />
      </div>)}
    </div>
  )
}
