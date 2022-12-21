import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBiscuitSnacks } from '../Redux/App/BiscuitsSnacksChocklates/action';
import "./Style/Items.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';

export const BiscuitChock = () => {
  const biscuitSnacks = useSelector(store=>store.BiscuitsSnacksChocolates);
  const {data} = biscuitSnacks
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getBiscuitSnacks())
  },[])


  return (
    <div id="items">
              <div id="items-head">
                  <h2>Biscuit Snacks & Chocklates</h2>
                  <Link to="biscuitchock"><p id='see-all'>See all</p></Link>
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
  )
}
