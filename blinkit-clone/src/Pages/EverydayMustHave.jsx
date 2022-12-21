import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getEverydayMustHaves } from '../Redux/App/EverydayMustHaves/action';
import "./Style/PageItems.css";
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
          <div id="page-items">
              <div id="items-head">
                  <h2>Everyday Must Have</h2>
              </div>
              <div id="page-items-products">
                  {data.length > 0 && data.map(el=>
                      <div key={el.id}>
                      <LazyLoadImage id='page-item-img' src={el.image} alt={el.id} effect="blur" />
                      <p id='page-item-title'>{el.title}</p>
                      <p>{el.quantity}</p>
                      <div id="page-items-price-div">
                          <p>{el.price}</p>
                          <button>Add</button>
                      </div>
                      </div>
                  )}
              </div>
          </div>
        );
}

