import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBiscuitSnacks } from '../Redux/App/BiscuitsSnacksChocklates/action';
import "./Style/PageItems.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const BiscuitChock = () => {
  const biscuitSnacks = useSelector(store=>store.BiscuitsSnacksChocolates);
  const {data} = biscuitSnacks
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getBiscuitSnacks())
  },[])


  return (
    <div id="page-items">
              <div id="items-head">
                  <h2>Biscuit Snacks & Chocklates</h2>
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
  )
}
