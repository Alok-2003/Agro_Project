import React from 'react'
import Navbar from "./Navbar";
import Hero from "./Hero.jsx";
import Offers from "./Offers.jsx";
import Plan from "./Plan.jsx";
import Rooms from "./Rooms.jsx";
import ImageSlider from "./ImageSlider.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
    return (
        <div>
            <Hero />
            <Offers />
            <Plan />
            <Rooms />
            <ImageSlider />
        </div>
    )
}

export default Home