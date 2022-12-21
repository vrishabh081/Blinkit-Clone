import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Style/Items.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { getPersonalCare } from '../Redux/App/PersonalCare/action';
import { Link } from 'react-router-dom';

export const PersonalCare = () => {
  const personalCare = useSelector(store=>store.PersonalCare);
  const {data} = personalCare
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPersonalCare())
  },[])


  return (
    <div id="items">
              <div id="items-head">
                  <h2>Personal Care</h2>
                  <Link to="/personalcare"><p id='see-all'>See all</p></Link>
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
