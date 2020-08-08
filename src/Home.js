import React from 'react'
import './Header.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Banner"/>            
            {/* Products */}
            <div className="home_row">
            <Product
            id = "12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={11.26}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/81j0RhrgNNL.__BG0,0,0,0_FMpng_AC_UL600_SR393,600_.jpg"
            />
            <Product
            id = "12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={11.26}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/81j0RhrgNNL.__BG0,0,0,0_FMpng_AC_UL600_SR393,600_.jpg"
            />
            </div>
            <div className="home_row">
            <Product
            id = "12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={11.26}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/81j0RhrgNNL.__BG0,0,0,0_FMpng_AC_UL600_SR393,600_.jpg"
            />
            <Product
            id = "12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={11.26}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/81j0RhrgNNL.__BG0,0,0,0_FMpng_AC_UL600_SR393,600_.jpg"
            />
            <Product
            id = "12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={11.26}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/81j0RhrgNNL.__BG0,0,0,0_FMpng_AC_UL600_SR393,600_.jpg"
            />
            </div>
            <div className="home_row">
            <Product
            id = "12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price={11.26}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/81j0RhrgNNL.__BG0,0,0,0_FMpng_AC_UL600_SR393,600_.jpg"
            />
            </div>
        </div>
    )
}

export default Home
