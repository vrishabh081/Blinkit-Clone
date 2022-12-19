import React, { useEffect } from 'react'
import "./Style/TopCarousel.css"
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/App/action';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Skeleton } from '@chakra-ui/react';

export const TopCarousel = () => {
  const topCarouselData = useSelector(store=>store.AppReducer.data[0]);
  // console.log(topCarouselData)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getData())
  },[])

  
  return (
    <div id='top-carousel'>
      {topCarouselData !== undefined ? topCarouselData.TopCarousel.map(el=>
        <div key={el.id}>
          <LazyLoadImage src={el.image} alt={el.id} effect="blur" />
        </div>
      ) : <Skeleton height='80vh' width="100%" />}
    </div>
  )
}