import React from 'react';
import { Helmet } from "react-helmet-async";
import "./style.scss"
import DeliciousDishes from '../../Component/deliciousDishes';
import AboutStory from '../../Component/AboutStory';
import FoodCards from '../../Component/FoodCards';

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <DeliciousDishes></DeliciousDishes>
      <AboutStory></AboutStory>
      <FoodCards></FoodCards>
    </div>
  );
}

export default Home;
