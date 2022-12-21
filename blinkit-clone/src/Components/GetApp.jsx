import React from 'react'
import "./Style/GetApp.css"
import deliverLogo from "../Images/delivery_logo.webp"
import mobileImage from "../Images/mobileImage.webp";
import qrCode from "../Images/qrCode.png";
import PlayStore from "../Images/PlayStore.webp";
import AppStore from "../Images/AppStore.webp";

export const GetApp = () => {
  return (
    <>
        <div id='get-app'>
            <div id='get-app-image'>
                <img src={mobileImage} id="mobileLogo" alt="mobileImage" />
                <img src={deliverLogo} id="scooterLogo" alt="deliveryLogo" />
            </div>
            <div id='get-app-heading'>
                <h1>Get the blinkit app</h1>
                <div id='get-app-check-icons'>
                    <ion-icon name="checkmark-circle"></ion-icon> <span>Get live order tracking</span> <br />
                    <ion-icon name="checkmark-circle"></ion-icon> <span>Get latest feature updates</span>
                </div>
                <div id='qrCode'>
                    <img src={qrCode} alt="qrCode" />
                    <div>
                        <p style={{fontWeight:"700", fontSize:"14px"}}>Simple way to download the Blinkit app</p>
                        <p style={{fontSize:"13.5px"}}>Scan QR code and download now</p>
                    </div>
                </div>
            </div>
        </div>

        <div id='small-screen'>
            <h3 style={{marginBottom:"-1.2rem"}}>Get the blinkit app</h3>
            <div id='get-app-check-icons'>
                <ion-icon name="checkmark-circle"></ion-icon> <span>Get live order tracking</span> <br />
                <ion-icon name="checkmark-circle"></ion-icon> <span>Get latest feature updates</span>
            </div>
            <h3 style={{marginTop:"1rem"}} >Download the Blinkit app Now</h3>
            <div id='download-button' style={{marginTop:"0.5rem"}}>
                <img src={PlayStore} alt="playStore" />
                <img src={AppStore} alt="appStore" />
            </div>
        </div>
    </>
  )
}
