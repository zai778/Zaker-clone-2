import React from "react";
import Hero from "../components/Hero";
import CardsSection from "../components/CardsSection";
import Cardspdf from "../components/Cardspdf";
import Video from "../components/Video";
const Home = () => {
    return (
      <div className="Home">
        <Hero />
        <CardsSection />
        <Cardspdf />
        <Video />
      </div>
    );
    
}
export default Home;