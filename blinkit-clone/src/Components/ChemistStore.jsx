import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getChemistStore } from '../Redux/App/ChemistStore/action';
import "./Style/Items.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const ChemistStore = () => {
  const chemistStore = useSelector(store=>store.ChemistStore);
  const {data} = chemistStore
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getChemistStore())
  },[])


  return (
    <div id="items">
              <div id="items-head">
                  <h2>Chemist Store</h2>
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
  )
}
