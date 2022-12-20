import React, { useEffect } from 'react'
import "./Style/TopItems.css"
import { useDispatch, useSelector } from 'react-redux'
import { getHomePageItems } from '../Redux/App/HomePageItems/action';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Skeleton } from '@chakra-ui/react';

export const HomePageItems = () => {
    const topItems = useSelector(store=>store.HomePageItems)
    const {data} = topItems
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getHomePageItems())
    }, [])

    return (
        <div id='top-items'>
            {data.length>0 && data.map(el=><data key={el.id}>
                <LazyLoadImage src={el.image} id='top-items-images' alt={el.id} effect="blur" />
            </data>)}
        </div>
    )
}

