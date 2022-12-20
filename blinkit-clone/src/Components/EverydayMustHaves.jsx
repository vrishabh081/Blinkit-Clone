import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getEverydayMustHaves } from '../Redux/App/EverydayMustHaves/action';
import "./Style/Items.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const EverydayMustHaves = () => {
    const dailyItems = useSelector(store=>store.EverydayMustHaves)
    const {data, isLoading} = dailyItems;
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getEverydayMustHaves())
    },[])
    

    return(
          <div id="items">
              <div id="items-head">
                  <h2>Everyday Must Have</h2>
                  <p>See all</p>
              </div>
              <div id="items-products">
                  {data.length > 0 && data.map(el=>
                      <div key={el.id}>
                      <LazyLoadImage src={el.image} alt={el.id} effect="blur" />
                      <p id='item-title'>{el.title}</p>
                      <p>{el.quantity}</p>
                      <div id="items-price-div">
                          <p>{el.price}</p>
                          <button>Add</button>
                      </div>
                      </div>
                  )}
              </div>
          </div>
        );
}

