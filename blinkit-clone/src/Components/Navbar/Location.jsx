import axios from "axios";
import { useState } from "react";

export function Location()
{
    const [city, setCity] = useState("Select");
    const [state, setState] = useState("your");
    const [country, setCountry] = useState("location");

    const success = (position) =>
    {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        axios.get(url)
        .then(res=>{
            setCity(res.data.city);
            setState(res.data.principalSubdivision);
            setCountry(res.data.countryName)
        })
        .catch(err=>console.log(err))
    }
    const error = ()=>
    {
        console.log("error");
    }

    const getLoaction = ()=>
    {

        navigator.geolocation.getCurrentPosition(success, error);
    }

    return (
        <div style={{display:'flex', marginTop:"10px"}}>
            {
                (city && state && country) && <p>{city} {state} {country}</p>
            }
            <ion-icon 
                name="caret-down-outline" 
                id="location-select" 
                onClick={getLoaction}
                style={{marginTop:"3px"}}
            >
            </ion-icon>
        </div>
    );
}