import React from 'react'
import "./Style/FourSection.css"
import ten_minute_delivery from "../Images/10_minute_delivery.avif"
import best_price_offers from "../Images/Best_Prices_Offers.avif"
import easy_returns_refund from "../Images/Easy_Returns_Refund.avif"
import wide_assortment from "../Images/Wide_Assortment.avif"

const fourSectionArr = [
    {
        id : 1,
        image : ten_minute_delivery,
        head : "Superfast Delivery", 
        para : "Get your order delivered to your doorstep at the earlie",
    },
    {
        id : 2,
        image : best_price_offers,
        head : "Best Prices & Offers", 
        para : "Cheaper prices than your local supermarket, great cashback offers to top it off.",
    },
    {
        id : 3,
        image : wide_assortment,
        head : "Wide Assortment", 
        para : "Choose from 5000+ products across food, personal care, household & other categories",
    },
    {
        id : 4,
        image : easy_returns_refund,
        head : "Easy Returns/Refund", 
        para : "Not satisfied with a product? Return it at the doorstep & get a refund within hours.",
    }
] 
export const FourSection = () => {
  return (
    <>
        <div id='four-section'>
            {fourSectionArr?.map(el=><div key={el.id}>
                <img src={el.image} alt={el.id} />
                <p style={{marginTop:"4vh", fontWeight:"500"}}>{el.head}</p>
                <p style={{marginTop:"1vh"}}>{el.para}</p>
            </div>)}
        </div>
        <p style={{width:"95%", fontSize:"0.8rem", margin:"1.5rem  4vw"}}>
            “Blinkit” is owned & managed by "Blink Commerce Private Limited" (formerly known as Grofers India Private Limited) and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.
        </p>
    </>
  )
}

